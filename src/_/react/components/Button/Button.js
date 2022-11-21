import React from "react";
import { LoadingButton as MaterialButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";

const Button = (props) => {
  const {
    className = "",
    disabled = false,
    loading = false,
    children,
    loadingPosition = "center",
    loadingIndicator = <CircularProgress color="inherit" size={16} />,
    startIcon,
    endIcon,
    variant,
    size = "medium",
    color = "primary",
    ...btnProps
  } = props;

  return (
    <MaterialButton
      className={className}
      loading={loading}
      disabled={disabled}
      variant={variant}
      loadingPosition={loadingPosition}
      loadingIndicator={loadingIndicator}
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      color={color}
      {...btnProps}
    >
      {children}
    </MaterialButton>
  );
};

export { Button };
