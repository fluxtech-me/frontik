function (a, b, c, d = 8, e) {
  if ( a ===b ) {
    if (a > c) {
      if ( c == b) {
        return {a: 12, b: 'meesage'};
      }
    }
  } else if ( d == c) {
    return  b + e + 100
  }
}

import React, {useRef, useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import ENDPOINTS from '../../../../../../services/endpoints';
import Interactive from '../../../DropZone/Interactable';
import {
    HEIGHT_OF_SPRITE_IMAGE,
    NUMBER_OF_IMAGES_IN_ONE_SPRITE,
    MEDIA_AUDIO_TYPE,
    MEDIA_PENDING_STATUS,
    MEDIA_FAILED_STATUS,
    MEDIA_VIDEO_TYPE,
    MEDIA_READY_STATUS,
    MIN_DURATION_FOR_SPRITES_PER_SECOND
} from '../../../../constants';
import {mousePositionChangeIndicator} from '../../../../util/mousePositionChangeIndicator';
import Spinner from '../../../../../../../images/icons/spinner.svg';
import {draggingMediaItems} from '../../../../util/draggingMediaItems';
import MediaInfo from './MediaInfo';
import DurationLine from './DurationLine';
import MediaContent from './MediaContent';
import {usePrevious} from 'Hooks';
import {editorService} from 'Services/app';
import DropZone from '../../../DropZone/DropZone';
import cx from 'classnames';
const VideoThumbnail = ({
                            video,
                            timeLineClipsPosition = [],
                            mediaItemIdToRename,
                            isStudentMode,
                            newNameForMediaItem,
                            isClipDragInTimeLine,
                            isActive,
                            mediaLibraryContent,
                            dragClipStart,
                            setLastSelectedVideo,
                            clipDragProcess,
                            dragClipEnd,
                            onClick,
                            handleScrollOnDrag,
                            openRenameInput,
                            handleNameChange,
                            setNameInputRef,
                            toggleVideo,
                            isSelected,
                            isSelectable = false,
                            mediaInfoEditable = true,
                            mediaItemDragActive = false,
                            setMediaItemDragActive = () => null,
                            tracksSources,
                            isTemplatePreviewedHasFullAccess,
                            dropZoneOptions,
                            videoIndex,
                        }) => {
    /**
     * MediaThumbnail
     *
     * @param  {Boolean} isSelectable - flag for  mediaBrowser / lesson media library
     * @param  {Object} video - video
     * @param  {Array} timeLineClipsPosition -timeLineClipsPosition
     * @param  {Number/String} mediaItemIdToRename - mediaItemIdToRename
     * @param  {String} newNameForMediaItem - newNameForMediaItem
     * @param  {Boolean} isClipDragInTimeLine - isClipDragInTimeLine
     * @param  {Boolean} isActive - isActive
     * @param  {REF/JSX} mediaLibraryContent - mediaLibraryContent
     * @param  {Function} dragClipStart - dragClipStart
     * @param  {Function} setLastSelectedVideo - setLastSelectedVideo
     * @param  {Function} clipDragProcess - clipDragProcess
     * @param  {Function} dragClipEnd - dragClipEnd
     * @param  {Function} onClick - onClick
     * @param  {Function} openRenameInput - openRenameInput
     * @param  {Function} handleNameChange - handleNameChange
     * @param  {Function} setNameInputRef - setNameInputRef
     * @param  {Function} toggleVideo - toggleVideo
     * @param  {Boolean} isSelected - isSelected
     * @param  {Boolean} isStudentMode - isStudentMode
     * @return {Component} MediaThumbnail component.
     */
    const [backgroundPositionX, setBackgroundPositionX] = useState(0);
    const [positionPercent, setPositionPercent] = useState(0);
    const [thumbnailHovered, setThumbnailHovered] = useState(false);
    const prevThumbnailHovered = useRef(false);
    const [firstSpriteLoaded, setFirstSpriteLoaded] = useState(null);
    const [secondSpriteLoaded, setSecondSpriteLoaded] = useState(null);
    const [loaderImageSrc, setLoaderImageSrc] = useState(null);
    const [thumbnailStyle, setThumbnailStyle] = useState({});
    const element = useRef();
    const prevSpriteLoaded1 = usePrevious(firstSpriteLoaded);
    const prevSpriteLoaded2 = usePrevious(secondSpriteLoaded);
    let remainder = 0;
    const spriteUrl = ENDPOINTS.SPRITES_URL + '/' + video.spriteName;
    const spriteUrl1 = video.spriteName1 ? ENDPOINTS.SPRITES_URL + '/' + video.spriteName1 : null;
    const posterImageUrl = ENDPOINTS.POSTERS_URL + '/' + video.posterName;
    const lineStyle = {
        left: positionPercent + '%'
    };
    useEffect(() => {
        const loader = new Image();
        loader.src = Spinner;
        loader.onload = () => setLoaderImageSrc(Spinner);
    }, []);
    useEffect(() => {
        if ((firstSpriteLoaded && !prevSpriteLoaded1) || (secondSpriteLoaded && !prevSpriteLoaded2)) {
            setBackgroundImage();
        }
    }, [firstSpriteLoaded, secondSpriteLoaded]);
    useEffect(() => {
        if (thumbnailHovered && !prevThumbnailHovered.current && video.state === MEDIA_READY_STATUS && video.mediaType === MEDIA_VIDEO_TYPE) {
            const firstSprite = new Image();
            firstSprite.src = spriteUrl;
            firstSprite.onload = () => setFirstSpriteLoaded(spriteUrl);
            if(spriteUrl1) {
                const secondSprite = new Image();
                secondSprite.src = spriteUrl1;
                secondSprite.onload = () => setSecondSpriteLoaded(spriteUrl1);
            }
            setBackgroundImage();
        }
        prevThumbnailHovered.current = thumbnailHovered;
    }, [thumbnailHovered]);
    useEffect(() => {
        if (thumbnailHovered && video.mediaType === MEDIA_VIDEO_TYPE) {
            setBackgroundImage();
        }
    }, [backgroundPositionX]);
    const setBackgroundImage = () => {
        setThumbnailStyle({
            backgroundImage: (positionPercent <= 50 || !spriteUrl1) ? `url(${firstSpriteLoaded || loaderImageSrc})` : `url(${secondSpriteLoaded || loaderImageSrc})`,
            backgroundPositionX: (firstSpriteLoaded || secondSpriteLoaded) ? `${backgroundPositionX}px` : 'center',
            backgroundRepeat: 'no-repeat',
        });
    };
    const draggableOptions = {
        onstart: () => {
            if (video.state === MEDIA_PENDING_STATUS || video.state === MEDIA_FAILED_STATUS) {
                return false;
            }
            let videoAudio = null;
            let currentMedia = {
                ...video,
                trackIndex: 0,
                timelineItemId: nanoid(),
            };
            if (video.mediaType === MEDIA_VIDEO_TYPE) {
                if (video.audioSource) {
                    const groupId = nanoid();
                    currentMedia = {
                        ...currentMedia,
                        groupId: (tracksSources &&
                            ((tracksSources.videoSourcesEnabled && tracksSources.audioSourcesEnabled) ||
                                (!tracksSources.videoSourcesEnabled && !tracksSources.audioSourcesEnabled))) || !tracksSources ? groupId : null
                    };
                    videoAudio = {
                        ...video,
                        timelineItemId: nanoid(),
                        trackIndex: 0,
                        mediaType: MEDIA_AUDIO_TYPE,
                        groupId: (tracksSources &&
                            ((tracksSources.videoSourcesEnabled && tracksSources.audioSourcesEnabled) ||
                                (!tracksSources.videoSourcesEnabled && !tracksSources.audioSourcesEnabled))) || !tracksSources ? groupId : null
                    };
                }
            }
            const draggingMedias = draggingMediaItems(currentMedia, videoAudio ? [videoAudio, currentMedia] : [currentMedia], tracksSources);
            setMediaItemDragActive(true);
            dragClipStart(draggingMedias);
            setLastSelectedVideo(video.id);
        },
        onmove: (event) => {
            if (video.state === MEDIA_PENDING_STATUS || video.state === MEDIA_FAILED_STATUS) {
                return false;
            }
            const timelineScrollContainer = editorService.state.DOM.timelineScrollContainer;
            const position = (Math.round(event.pageX) - timelineScrollContainer.getBoundingClientRect().left + timelineScrollContainer.scrollLeft);
            if (isClipDragInTimeLine) {
                const zoom = editorService.state.timeline.zoom;
                remainder = mousePositionChangeIndicator(position, zoom);
            }
            const clipInfo = {
                x: Math.round(event.pageX) - remainder,
                y: event.pageY - 20,//TODO Calculate shiftY dynamic.
                clientX: event.clientX,
                offsetLeft: position - remainder,
                snappedClipsData: timeLineClipsPosition.filter(position => Math.round(position.x + remainder) === Math.round(event.pageX))
            };
            handleScrollOnDrag(clipInfo, mediaLibraryContent);
            clipDragProcess(clipInfo);
        },
        snap: {
            targets: timeLineClipsPosition.map(item => {
                return {
                    ...item, x: item.x + remainder
                };
            })
        },
        onend: (event) => {
            if (video.state === MEDIA_PENDING_STATUS || video.state === MEDIA_FAILED_STATUS) {
                return false;
            }
            setBackgroundPositionX(0);
            setPositionPercent(0);
            setThumbnailHovered(false);
            setMediaItemDragActive(false);
            dragClipEnd();
        }
    };
    const onMouseMove = (e) => {
        /**
         * onMouseMove in media
         * positionPercent -lineStyle left
         * element.current.getBoundingClientRect().height / HEIGHT_OF_SPRITE_IMAGE for width\
         * framePosition -for change frame position depend mouse move
         * currentSecond - number of frame
         */
        if (mediaItemDragActive) {
            return;
        }
        if (!thumbnailHovered) {
            /**
             * there is case that after reload or after opening the folder mouse position is on media item.
             * and in that case onMouseEnter func is not working
             */
            setThumbnailHovered(true);
        }
        if ((e.pageX - element.current.getBoundingClientRect().x) > 0
            && (e.pageX - element.current.getBoundingClientRect().x) < element.current.getBoundingClientRect().width) {
            const duration = spriteUrl1 ? NUMBER_OF_IMAGES_IN_ONE_SPRITE : video.duration / video.fps < MIN_DURATION_FOR_SPRITES_PER_SECOND ? video.duration : video.duration / video.fps;
            const positionPercent = (e.pageX - element.current.getBoundingClientRect().x) / (element.current.getBoundingClientRect().width); // 0 - 1
            const currentSecond = Math.floor(duration * ((positionPercent <= 0.5 || !spriteUrl1) ? positionPercent : (positionPercent - 0.5)));
            const framePosition = (currentSecond *
                (spriteUrl1 ? (NUMBER_OF_IMAGES_IN_ONE_SPRITE * element.current.getBoundingClientRect().height / HEIGHT_OF_SPRITE_IMAGE) :
                    element.current.getBoundingClientRect().width));
            setBackgroundPositionX(-framePosition);
            setPositionPercent(positionPercent * 100);
        }
    };
    const onMouseLeave = () => {
        if (mediaItemDragActive) {
            return;
        }
        setBackgroundPositionX(0);
        setPositionPercent(0);
        setThumbnailHovered(false);
    };
    const onMouseEnter = () => {
        if (mediaItemDragActive) {
            return;
        }
        setThumbnailHovered(true);
    };
    const selectedWidth = ((video.outPoint - video.inPoint) * 100) / video.duration;
    const interactiveProps = !isSelectable ? {
        draggableOptions,
        draggable: true
    } : {};
    const toggleVideoSelection = (e) => {
        toggleVideo(!isSelected, video);
    };
    return (
        <Interactive {...interactiveProps}>
            <DropZone key={`dropzoneMedia${video.id}${videoIndex}`} dropzone
                      dropzoneOptions={!isStudentMode && isTemplatePreviewedHasFullAccess ? dropZoneOptions(video) : {}}>
                <div className={cx(
                    'thumbnail-wrapper with-hover',
                    {
                        'active-video' : isActive,
                        'no-hover' : video.state === MEDIA_PENDING_STATUS || video.state === MEDIA_FAILED_STATUS
                    })}
                     onClick={(e) => isSelectable ? toggleVideoSelection(e) : null}>
                    <div className={`${video.mediaType === MEDIA_VIDEO_TYPE ? 'video' : 'audio'}-thumbnail`}
                         ref={element}
                         onMouseEnter={(e) => {
                             onMouseEnter(video.id);
                         }}
                         onMouseMove={onMouseMove}
                         onMouseLeave={onMouseLeave}
                         style={thumbnailStyle}
                         onClick={() => {
                             if (!isSelectable) {
                                 onClick(video);
                             }
                         }}
                    >
                        <MediaContent
                            isSelectable={isSelectable}
                            isSelected={isSelected}
                            video={video}
                            isStudentMode={isStudentMode}
                            loaderImageSrc={loaderImageSrc}
                            mediaLibraryContent={mediaLibraryContent}
                            posterImageUrl={posterImageUrl}
                            lineStyle={lineStyle}
                            toggleVideo={toggleVideo}
                            thumbnailHovered={thumbnailHovered}
                        />
                    </div>
                    <MediaInfo
                        isSelectable={isSelectable}
                        editable={mediaInfoEditable}
                        video={video}
                        isStudentMod={isStudentMode}
                        openRenameInput={openRenameInput}
                        mediaItemIdToRename={mediaItemIdToRename}
                        handleNameChange={handleNameChange}
                        setNameInputRef={setNameInputRef}
                        newNameForMediaItem={newNameForMediaItem}
                    />
                    <DurationLine
                        selectedWidth={selectedWidth}
                        element={element}
                        isSelectable={isSelectable}
                        video={video}
                    />
                    {video.state === MEDIA_PENDING_STATUS || video.state === MEDIA_FAILED_STATUS ? (
                        <div className='media-item-pending-status'>
                            <i className="fa fa-spinner fa-pulse"/>
                        </div>
                    ) : null}
                </div>
            </DropZone>
        </Interactive>
    );
};
export default VideoThumbnail;
