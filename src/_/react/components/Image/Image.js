import React from "react";
import "./Image.scss";
import cx from "classnames";

export const Image = (props) => {
  const {
    alt = "Image alternative text",
    width = 100,
    height = 100,
    className,
    fluid = true,
    ...rest
  } = props;

  return (
    <>
      <img
        alt={alt}
        width={width}
        height={height}
        className={cx(className, {
          "img-fluid": fluid,
        })}
        {...rest}
      />
    </>
  );
};
