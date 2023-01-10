import React from "react";
import { Helmet } from "react-helmet-async";
import { Picture } from "frontik/react/Picture";
import "Pages/Picture/PicturePage.scss";
// hooks
import { useWindowScroll } from "Hooks";
//images
import largeDevice from "../../Assets/images/demoImages/largeDevice1200x800.png";
import mediumDeviceImage from "../../Assets/images/demoImages/meidumImage600x400.png";
import smallDeviceImage from "../../Assets/images/demoImages/smallImage300x200.png";

import largeDeviceWebP from "../../Assets/images/demoImages/largeDeviceWebP.webp";
import largeDeviceJpg from "../../Assets/images/demoImages/largeDeviceJpg.jpg";

const PicturePage = () => {
  useWindowScroll({ x: 0, y: 0, atReload: true });

  const mutualConfig = {
    width: 600,
    height: 400,
    alt: "Free Close-Up Photo of Dog Wearing Sunglasses",
    loading: "lazy",
    className: "custom-img-styles",
  };
  const image1Config = {
    ...mutualConfig,
    src: smallDeviceImage,
    sources: [
      { media: "(min-width: 440px)", srcSet: mediumDeviceImage },
      { media: "(min-width: 1200)", srcSet: largeDevice }, //????
    ],
  };
  const image2Config = {
    ...mutualConfig,
    src: largeDevice,
    sources: [
      { srcSet: largeDeviceWebP, type: "webp" },
      { srcSet: largeDeviceJpg, type: "jpg" }, //????
    ],
  };

  return (
    <>
      <Helmet>
        <title>Image Component</title>
      </Helmet>
      <main>
        <h1 className="responsive-title">Picture Demo</h1>

        <section className="sec-wrapper">
          <section className="components-section">
            <h3>
              Image with <i>media</i> and <i>srcSet</i> attributes
            </h3>
            <div className="demo-box">
              <Picture {...image1Config} />
            </div>
            <h3>
              Image with <i>media format types</i>
            </h3>
            <div className="demo-box">
              <Picture {...image2Config} />
            </div>
          </section>
        </section>
      </main>
    </>
  );
};
export { PicturePage };
