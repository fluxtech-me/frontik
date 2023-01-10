import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

import { Routers } from "./Routers";

const Main = () => {
  return (
    <HelmetProvider>
      <ToastContainer />
      <Routers />
    </HelmetProvider>
  );
};

export { Main };
