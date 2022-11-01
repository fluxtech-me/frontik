import { Helmet } from "react-helmet-async";

// hooks
import { useWindowScroll } from "Hooks";
import { NativeButton } from "./src/NativeButton";
import "./buttonPage.scss";
import { CircularProgress, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Button } from "./src";

const ButtonPage = () => {
  useWindowScroll({ x: 0, y: 0, atReload: true });
  const [variant, setVariant] = useState("text");
  const [loading, setLoading] = useState(false);
  const [iconsLoading, setIconsLoading] = useState(false);
  const [isCustomsLoading, setCustomsLoading] = useState(false);
  const handleVariantChange = (event) => {
    const { value } = event.target;
    setVariant(value);
  };
  const handleLoadingChange = (event) => {
    const { value } = event.target;
    setLoading(Boolean(value));
  };
  const handleIconsLoadingChange = (event) => {
    const { value } = event.target;
    setIconsLoading(Boolean(value));
  };
  const handleCustomsLoadingChange = (event) => {
    const { value } = event.target;
    setCustomsLoading(Boolean(value));
  };

  return (
    <>
      <Helmet>
        <title>Button</title>
      </Helmet>
      <main className="page">
        <h1>NativeButton component</h1>
        <section className="sectionContainer">
          <h2>Variants of buttons</h2>
          <div className="btnsContainer">
            <NativeButton>Text</NativeButton>
            <NativeButton variant="outlined">Outlined</NativeButton>
            <NativeButton variant="contained">Contained</NativeButton>
          </div>
        </section>
        <section className="sectionContainer">
          <h2>Colors of buttons</h2>
          <RadioGroup
            className="radioGroup"
            row
            onChange={handleVariantChange}
            defaultValue={variant}
          >
            <label>Text</label>
            <Radio value={"text"} />
            <label>Outlined</label>
            <Radio value={"outlined"} />
            <label>Contained</label>
            <Radio value={"contained"} />
          </RadioGroup>
          <div className="btnsContainer">
            <NativeButton variant={variant} color="primary">
              Primary
            </NativeButton>
            <NativeButton variant={variant} color="secondary">
              Secondary
            </NativeButton>
            <NativeButton variant={variant} color="info">
              Info
            </NativeButton>
            <NativeButton variant={variant} color="success">
              Success
            </NativeButton>
            <NativeButton variant={variant} color="warning">
              Warning
            </NativeButton>
            <NativeButton variant={variant} color="error">
              Error
            </NativeButton>
          </div>
        </section>
        <section className="sectionContainer">
          <h2>Sizes of buttons</h2>
          <div className="btnsContainer">
            <NativeButton size="small" color="secondary">
              Small
            </NativeButton>
            <NativeButton size="medium" color="success">
              Medium
            </NativeButton>
            <NativeButton size="large" color="info">
              Large
            </NativeButton>
          </div>
          <div className="btnsContainer">
            <NativeButton variant="outlined" size="small" color="secondary">
              Small
            </NativeButton>
            <NativeButton variant="outlined" size="medium" color="success">
              Medium
            </NativeButton>
            <NativeButton variant="outlined" size="large" color="info">
              Large
            </NativeButton>
          </div>
          <div className="btnsContainer">
            <NativeButton variant="contained" size="small" color="secondary">
              Small
            </NativeButton>
            <NativeButton variant="contained" size="medium" color="success">
              Medium
            </NativeButton>
            <NativeButton variant="contained" size="large" color="info">
              Large
            </NativeButton>
          </div>
        </section>
        <section className="sectionContainer">
          <h2>Buttons with disabled state</h2>
          <div className="btnsContainer">
            <NativeButton variant="text" disabled size="small">
              Text
            </NativeButton>
            <NativeButton variant="outlined" disabled size="medium">
              Outlined
            </NativeButton>
            <NativeButton variant="contained" disabled size="large">
              Contained
            </NativeButton>
          </div>
        </section>
        <section className="sectionContainer">
          <h2>Buttons with loading state</h2>
          <RadioGroup
            className="radioGroup"
            row
            onChange={handleLoadingChange}
            defaultValue={""}
          >
            <label>Loading</label>
            <Radio value={1} />
            <label>Normal</label>
            <Radio value={""} />
          </RadioGroup>
          <div className="btnsContainer">
            <NativeButton variant="text" loading={loading} size="small">
              Text
            </NativeButton>
            <NativeButton variant="outlined" loading={loading} size="medium">
              Outlined
            </NativeButton>
            <NativeButton variant="contained" loading={loading} size="large">
              Contained
            </NativeButton>
            <NativeButton
              variant="outlined"
              loading={loading}
              size="medium"
              loadingIndicator={<CircularProgress color="inherit" size={26} />}
            >
              Custom Indicator
            </NativeButton>
          </div>
        </section>
        <section className="sectionContainer">
          <h2>Buttons with icons</h2>
          <div className="btnsContainer">
            <div className="btnWrapper">
              <label>With Start Icon</label>
              <NativeButton
                variant="outlined"
                color="warning"
                startIcon={<WarningIcon />}
              >
                Warning
              </NativeButton>
            </div>
            <div className="btnWrapper">
              <label>With End Icon</label>
              <NativeButton
                variant="text"
                color="info"
                endIcon={<HelpCenterIcon />}
              >
                Info
              </NativeButton>
            </div>
            <div className="btnWrapper">
              <label>With Start and End Icon</label>
              <NativeButton
                variant="contained"
                color="error"
                startIcon={<ErrorOutlineIcon />}
                endIcon={<ErrorOutlineIcon />}
              >
                Error
              </NativeButton>
            </div>
            <div className="btnWrapper">
              <label>Only Icon button</label>
              <NativeButton variant="text" color="success">
                <CheckCircleIcon />
              </NativeButton>
            </div>
          </div>
        </section>
        <section className="sectionContainer">
          <h2>Loading positions</h2>
          <RadioGroup
            className="radioGroup"
            row
            onChange={handleIconsLoadingChange}
            defaultValue={""}
          >
            <label>Loading</label>
            <Radio value={1} />
            <label>Normal</label>
            <Radio value={""} />
          </RadioGroup>
          <div className="btnsContainer">
            <NativeButton
              variant="outlined"
              color="warning"
              loading={iconsLoading}
              loadingPosition="start"
              loadingIndicator={<CircularProgress color="inherit" size={18} />}
              startIcon={<WarningIcon />}
            >
              Warning
            </NativeButton>
            <NativeButton
              variant="text"
              color="info"
              loading={iconsLoading}
              loadingPosition="end"
              loadingIndicator={<CircularProgress color="inherit" size={18} />}
              endIcon={<HelpCenterIcon />}
            >
              Info
            </NativeButton>
            <NativeButton
              variant="contained"
              color="error"
              loading={iconsLoading}
              startIcon={<ErrorOutlineIcon />}
              endIcon={<ErrorOutlineIcon />}
              loadingIndicator={<CircularProgress color="inherit" size={18} />}
            >
              Error
            </NativeButton>
            <NativeButton
              variant="text"
              loading={iconsLoading}
              loadingIndicator={<CircularProgress color="inherit" size={18} />}
              color="success"
            >
              <CheckCircleIcon />
            </NativeButton>
            <NativeButton
              variant="outlined"
              color="primary"
              loading={iconsLoading}
              loadingPosition="end"
              loadingIndicator={<CircularProgress color="inherit" size={18} />}
              startIcon={<KeyboardDoubleArrowUpIcon />}
            >
              Primary
            </NativeButton>
            <NativeButton
              variant="contained"
              color="secondary"
              loading={iconsLoading}
              loadingPosition="start"
              loadingIndicator={<CircularProgress color="inherit" size={18} />}
              endIcon={<KeyboardDoubleArrowDownIcon />}
            >
              Secondary
            </NativeButton>
          </div>
        </section>
        <section className="sectionContainer">
          <h2>Buttons with customized styles</h2>
          <RadioGroup
            className="radioGroup"
            row
            onChange={handleCustomsLoadingChange}
            defaultValue={""}
          >
            <label>Loading</label>
            <Radio value={1} />
            <label>Normal</label>
            <Radio value={""} />
          </RadioGroup>
          <div className="btnsContainer">
            <NativeButton
              className="customized"
              variant="outlined"
              color="info"
              size="large"
              loading={isCustomsLoading}
            >
              Importent
            </NativeButton>
            <NativeButton
              className="customized-icon-btn"
              variant="text"
              color="success"
              size="large"
              loading={isCustomsLoading}
              loadingIndicator={
                <CircularProgress
                  className="loadingIcon"
                  color="inherit"
                  size={28}
                />
              }
            >
              <CheckCircleIcon className="successIcon" />
            </NativeButton>
            <Button>MUI</Button>
          </div>
        </section>
      </main>
    </>
  );
};

export { ButtonPage };
