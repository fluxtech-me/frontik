import React from "react";
import { Helmet } from "react-helmet-async";
import { Image } from "frontik/react/Image";
import "./ImagePage.scss";
//images
import priorityImage from "../../Assets/images/demoImages/largeDevice1200x800.png";
import mediumDeviceImage from "../../Assets/images/demoImages/meidumImage600x400.png";
import smallDeviceImage from "../../Assets/images/demoImages/smallImage300x200.png";
import image1x from "../../Assets/images/demoImages/image1x.webp";
import image2x from "../../Assets/images/demoImages/image2x.webp";
// hooks
import { useWindowScroll } from "Hooks";

const ImagePage = () => {
  useWindowScroll({ x: 0, y: 0, atReload: true });

  const mutualConfig = {
    src: smallDeviceImage,
    width: 600,
    height: 400,
    alt: "Free Close-Up Photo of Dog Wearing Sunglasses",
    loading: "lazy",
    className: "custom-img-styles",
  };
  const image1Config = {
    ...mutualConfig,
    srcSet: `
            ${smallDeviceImage} 300w,
            ${mediumDeviceImage} 600w,
            ${priorityImage} 1200w
        `,
    sizes: `(min-width: 66em) 33vw,
                (min-width: 44em) 50vw,
                100vw`,
  };
  const image2Config = {
    ...mutualConfig,
    srcset: `
            ${image1x} 1x,
            ${image2x} 2x,
        `,
  };

  return (
    <>
      <Helmet>
        <title>Image Component</title>
        <link rel="prefetch" href={priorityImage} as="image" />
      </Helmet>
      <main>
        <h1 className="responsive-title">Image Demo</h1>

        <section className="sec-wrapper">
          <section className="components-section">
            <h3>
              Image with usual <i>src</i> and <i>aspect-ratio style</i>
            </h3>
            <div className="demo-box">
              <Image
                src={priorityImage}
                className="aspect-ratio"
                width={400}
                height={400}
                fluid={false}
                alt="Alt text for image"
              />
            </div>

            <h3>
              Image with <i>srcSet</i> and <i>sizes</i> attributes
            </h3>
            <div className="demo-box">
              <Image {...image1Config} />
            </div>

            <h3>
              Image with <i>sizes</i> attributes
            </h3>
            <div className="demo-box">
              <Image {...image2Config} />
            </div>
          </section>
        </section>
      </main>
    </>
  );
};
export { ImagePage };
