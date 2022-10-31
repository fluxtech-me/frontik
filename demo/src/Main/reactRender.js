import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./Main";

const reactRender = () => {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <StrictMode>
      <Main />
    </StrictMode>
  );
};

export { reactRender };
