export const getClassNameFromProps = ({
  color,
  size,
  disabled,
  loading,
  variant = "text",
}) => {
  const classNames = [""];
  classNames.push(`-${variant}`, `-${color}`, `-${size}`);
  if (disabled) {
    classNames.push("-disabled");
  }
  if (loading) {
    classNames.push("-loading");
  }
  const addaptedClassNames = classNames.map((className) => {
    return "frontik-btn" + className;
  });
  return addaptedClassNames.join(" ");
};
