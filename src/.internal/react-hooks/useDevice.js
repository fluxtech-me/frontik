import { useEffect, useState } from "react";
import { Device } from "../services/device";

const useDevice = () => {
  const [, forceUpdate] = useState();

  useEffect(() => {
    window.addEventListener("resize", forceUpdate);
    return () => window.removeEventListener("resize", forceUpdate);
  }, []);

  return Device;
};

export { useDevice };
