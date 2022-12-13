import React from "react";
import cx from "classnames";
import "./Icon.scss";

const prefix = "frontik-icon";

export const Icon = (props) => {
  const {
    size = "",
    name = "",
    color = "",
    className = "",
    animation = "",
    disabled = false,
    ...rest
  } = props;

  const sizeClassname = `${prefix}-${size}`;
  const colorClassname = `${prefix}-${color}`;

  const classes = cx(
    name,
    className,
    animation,
    {
      disabled: disabled,
      [colorClassname]: color,
      [sizeClassname]: size,
    },
    prefix
  );

  return (
    <>
      <span className={classes} {...rest} />
    </>
  );
};
