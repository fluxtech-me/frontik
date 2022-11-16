import { getClassNameFromProps } from "./getClassNameFromProps";
import "./Button.scss";

const NativeButton = (props) => {
  const {
    className = "",
    disabled = false,
    loading = false,
    children,
    loadingPosition = "center",
    loadingIndicator = "Loading...",
    startIcon,
    endIcon,
    variant = "text",
    size = "medium",
    color = "primary",
    ...btnProps
  } = props;

  const getPositionedChildrens = (position, icon) => {
    if (loading && loadingPosition === position) {
      return loadingIndicator;
    } else if (icon) {
      return icon;
    } else {
      return null;
    }
  };

  const defaultClassNames = getClassNameFromProps({
    color,
    size,
    disabled,
    loading,
    variant,
  });

  return (
    <button
      disabled={disabled}
      className={className + ` ${defaultClassNames}`}
      {...btnProps}
    >
      {getPositionedChildrens("start", startIcon)}
      {loading && loadingPosition === "center" ? loadingIndicator : children}
      {getPositionedChildrens("end", endIcon)}
    </button>
  );
};

export { NativeButton };
