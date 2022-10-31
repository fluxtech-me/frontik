import { Helmet } from "react-helmet-async";

// hooks
import { useWindowScroll } from "Hooks";

const NotFoundPage = () => {
  useWindowScroll({ x: 0, y: 0, atReload: true });

  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div>
        <h2>Page Not Found</h2>
      </div>
    </>
  );
};

export { NotFoundPage };
