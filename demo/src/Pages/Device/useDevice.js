import { useEffect, useState } from "react";
import { device } from "./Device";

const useDevice = () => {
  const [, forceUpdate] = useState();

  useEffect(() => {
    window.addEventListener("resize", forceUpdate);
    return () => window.removeEventListener("resize", forceUpdate);
  }, []);

  return device;
};

export { useDevice };
