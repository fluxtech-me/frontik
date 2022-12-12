import React from 'react'
import {Helmet} from 'react-helmet-async'
import FrontikIcons from './FrontikIcons'
import {Icon} from './index'
// hooks
import {useWindowScroll} from 'Hooks'
import BlurryLoadingImage from 'Pages/Icon/SvgIcon'

const IconPage = () => {
    useWindowScroll({x: 0, y: 0, atReload: true})

    const clickHandler = (e) => {
        console.log(e)
        alert('Hello Frontik')
    }

    return (
        <>
            <Helmet>
                <title>Icon Component</title>
            </Helmet>
            <main>
                <h1 className="responsive-title">Icon Demo</h1>

                <section className="sec-wrapper">
                    <section className="components-section">
                        <h2>ICOMOON</h2>
                        <ul className="demo-type-list">
                            <li>
                                <b>Clickable</b>
                            </li>
                            {/*<li>*/}
                            {/*    <Icon*/}
                            {/*        onClick={(e) => clickHandler(e)}*/}
                            {/*        tabIndex="0"*/}
                            {/*        size="md"*/}
                            {/*        color="warning"*/}
                            {/*        name="earth"*/}
                            {/*    />*/}
                            {/*</li>*/}
                            <li>
                                <Icon
                                    onClick={(e) => clickHandler(e)}
                                    tabIndex="0"
                                    role="button"
                                    size="md"
                                    color="secondary"
                                    name="frontik frontik-earth"
                                />
                            </li>
                            {/*<li>*/}
                            {/*    <button*/}
                            {/*        onClick={(e) => clickHandler(e)}*/}
                            {/*    >*/}
                            {/*        <Icon*/}
                            {/*            color="secondary"*/}
                            {/*            size="md"*/}
                            {/*            name="earth"*/}
                            {/*        />*/}
                            {/*    </button>*/}
                            {/*</li>*/}
                        </ul>
                        <ul className="demo-type-list">
                            <li>
                                <b>Element by Color</b>
                            </li>
                            <li>
                                <Icon

                                    color="secondary"
                                    size="md"
                                    name="frontik frontik-info1"
                                    title="Info icon"
                                />
                            </li>
                            <li>
                                <Icon name="frontik frontik-info1"

                                      size="md"
                                      color="error"
                                      title="Info icon"
                                />
                            </li>
                            <li>
                                <Icon
                                    color="primary"

                                    size="md"
                                    name="frontik frontik-info1"
                                    title="Info icon"
                                />
                            </li>
                            <li>
                                <Icon
                                    color="info"

                                    size="md"
                                    name="frontik frontik-info1"
                                    title="Info icon"
                                />
                            </li>
                            <li>
                                <Icon
                                    color="warning"

                                    size="md"
                                    name="frontik frontik-info1"
                                    title="Info icon"
                                />
                            </li>
                            <li>
                                <Icon
                                    color="success"

                                    size="md"
                                    name="frontik frontik-info1"
                                    title="Info icon"
                                />
                            </li>
                        </ul>
                        <ul className="demo-type-list">
                            <li>
                                <b>Element by Size</b>
                            </li>
                            <li>
                                <Icon name="frontik frontik-frontik frontik-info1"

                                      size="xs"
                                      color="secondary"
                                      title="Info icon"
                                />
                            </li>
                            <li>
                                <Icon
                                    size="sm"
                                    name="frontik frontik-frontik frontik-info1"
                                    color="secondary"

                                    title="Info icon"
                                />
                            </li>
                            <li>
                                <Icon
                                    size="md"
                                    name="frontik frontik-frontik frontik-info1"
                                    color="secondary"

                                    title="Info icon"
                                />
                            </li>
                            <li>
                                <Icon
                                    size="lg"
                                    name="frontik frontik-frontik frontik-info1"
                                    color="secondary"

                                    title="Info icon"
                                />
                            </li>
                            <li>
                                <Icon
                                    size="xlg"
                                    name="frontik frontik-frontik frontik-info1"
                                    color="secondary"
                                    title="Info icon"

                                />
                            </li>
                        </ul>
                        <ul className="demo-type-list">
                            <li>
                                <b>Animating</b>
                            </li>
                            <li>
                                <Icon name="frontik frontik-frontik frontik-spinner6"
                                      size="md"
                                      animation="spin"
                                      color="success"
                                      title="Info icon"
                                />
                            </li>
                            <li>
                                <Icon
                                    size="md"
                                    color="warning"
                                    animation="beat-fade"

                                    name="frontik frontik-info1"
                                    title="Info icon"
                                />
                            </li>
                            <li>
                                <Icon
                                    size="lg"

                                    color="info"
                                    animation="beat"
                                    name="frontik frontik-info1"
                                    title="Info icon"
                                />
                            </li>
                            <li>
                                <Icon
                                    size="xlg"
                                    color="secondary"
                                    animation="shake"
                                    name="frontik frontik-heart"
                                    title="Info icon"
                                />
                            </li>
                        </ul>
                    </section>
                    <section className="components-section">
                        <h2>FONT AWESOME</h2>
                        <ul className="demo-type-list">
                            <li>
                                <Icon
                                    name="fa fa-heart"
                                    color="primary"
                                    size="xlg"
                                />
                            </li>
                            <li>
                                <Icon
                                    name="fa fa-twitter"
                                    color="secondary"
                                    size="lg"
                                    className="fa-solid"
                                />
                            </li>
                        </ul>
                    </section>
                </section>
                <FrontikIcons />
            </main>
        </>
    )
}

export {IconPage}
