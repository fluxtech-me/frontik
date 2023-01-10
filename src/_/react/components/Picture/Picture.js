import React from "react";
import "./Picture.scss";
import cx from "classnames";

export const Picture = (props) => {
  const {
    sources,
    src,
    width = 100,
    height = 100,
    alt = "Picture image alternative text",
    fluid = true,
    className,
  } = props;
  return (
    <picture className="">
      {sources?.map((source) => (
        <source
          srcSet={source.srcSet}
          media={source.media}
          type={source.type ? "image/" + source.type : null}
        />
      ))}
      <img
        className={cx(className, {
          "img-fluid": fluid,
        })}
        height={height}
        width={width}
        src={src}
        alt={alt}
      />
    </picture>
  );
};
