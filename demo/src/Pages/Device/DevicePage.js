import React from "react";
import { Helmet } from "react-helmet-async";

// hooks
import { useWindowScroll } from "Hooks";
import { Device } from "frontik/device";
import { useDevice } from "frontik/react/useDevice";

const DeviceServiceInfo = () => {
  return (
    <div>
      <h2>Device Service</h2>
      <p>width - {Device.width}</p>
      <p>height - {Device.height}</p>
      <p>browserName - {Device.browserName}</p>
      <p>isChrome - {Device.isChrome.toString()}</p>
    </div>
  );
};

const UseDeviceHookInfo = () => {
  const deviceInfo = useDevice();

  return (
    <div>
      <h2>useDevice hook</h2>
      <p>width - {deviceInfo.width}</p>
      <p>height - {deviceInfo.height}</p>
    </div>
  );
};

const DevicePage = () => {
  useWindowScroll({ x: 0, y: 0, atReload: true });

  return (
    <>
      <Helmet>
        <title>Device</title>
      </Helmet>
      <main>
        <DeviceServiceInfo />
        <hr />
        <UseDeviceHookInfo />
      </main>
    </>
  );
};

export { DevicePage };
