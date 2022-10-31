import { Helmet } from "react-helmet-async";

// hooks
import { useWindowScroll } from "Hooks";

import { device } from "./Device";
import { useDevice } from "./useDevice";

const DeviceServiceInfo = () => {
  return (
    <div>
      <h2>Device Service</h2>
      <p>width - {device.width}</p>
      <p>height - {device.height}</p>
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
