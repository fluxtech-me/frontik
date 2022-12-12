import React from "react";
import { Helmet } from "react-helmet-async";
import FrontikIcons from "./FrontikIcons";
import { Icon } from "frontik/react/Icon";
// hooks
import { useWindowScroll } from "Hooks";

const IconPage = () => {
  useWindowScroll({ x: 0, y: 0, atReload: true });

  const clickHandler = (e) => {
    alert("Hello Frontik");
  };

  return (
    <>
      <Helmet>
        <title>Icon Component</title>
        <script
          src="https://kit.fontawesome.com/8995652655.js"
          crossOrigin="anonymous"
        />
      </Helmet>
      <main>
        <h1 className="responsive-title">Icon Demo</h1>

        <section className="sec-wrapper">
          <section className="components-section">
            <h2>ICOMOON</h2>
            <h4>Icomoon project nested icons</h4>
            <ul className="demo-type-list demo-box">
              <li>
                <b>Clickable</b>
              </li>
              <li>
                <Icon
                  onClick={(e) => clickHandler(e)}
                  tabIndex="0"
                  role="button"
                  size="md"
                  color="secondary"
                  name="frontik frontik-earth"
                />
              </li>
            </ul>
            <ul className="demo-type-list demo-box">
              <li>
                <b>Element by Color</b>
              </li>
              <li>
                <Icon
                  color="secondary"
                  size="md"
                  name="frontik frontik-info1"
                  title="Info icon"
                />
              </li>
              <li>
                <Icon
                  name="frontik frontik-info1"
                  size="md"
                  color="error"
                  title="Info icon"
                />
              </li>
              <li>
                <Icon
                  disabled
                  color="primary"
                  size="md"
                  name="frontik frontik-info1"
                  title="Info icon"
                />
              </li>
              <li>
                <Icon
                  color="info"
                  size="md"
                  name="frontik frontik-info1"
                  title="Info icon"
                />
              </li>
              <li>
                <Icon
                  color="warning"
                  size="md"
                  name="frontik frontik-info1"
                  title="Info icon"
                />
              </li>
              <li>
                <Icon
                  color="success"
                  size="md"
                  name="frontik frontik-info1"
                  title="Info icon"
                />
              </li>
            </ul>
            <ul className="demo-type-list demo-box">
              <li>
                <b>Element by Size</b>
              </li>
              <li>
                <Icon
                  name="frontik frontik-frontik frontik-info1"
                  size="xs"
                  color="secondary"
                  title="Info icon"
                />
              </li>
              <li>
                <Icon
                  size="sm"
                  name="frontik frontik-frontik frontik-info1"
                  color="secondary"
                  title="Info icon"
                />
              </li>
              <li>
                <Icon
                  size="md"
                  name="frontik frontik-frontik frontik-info1"
                  color="secondary"
                  title="Info icon"
                />
              </li>
              <li>
                <Icon
                  size="lg"
                  name="frontik frontik-frontik frontik-info1"
                  color="secondary"
                  title="Info icon"
                />
              </li>
              <li>
                <Icon
                  size="xlg"
                  name="frontik frontik-frontik frontik-info1"
                  color="secondary"
                  title="Info icon"
                />
              </li>
            </ul>
            <ul className="demo-type-list demo-box">
              <li>
                <b>Animating</b>
              </li>
              <li>
                <Icon
                  name="frontik frontik-frontik frontik-spinner6"
                  size="md"
                  animation="spin"
                  color="success"
                  title="Info icon"
                />
              </li>
              <li>
                <Icon
                  size="md"
                  color="warning"
                  animation="beat-fade"
                  name="frontik frontik-info1"
                  title="Info icon"
                />
              </li>
              <li>
                <Icon
                  size="lg"
                  color="info"
                  animation="beat"
                  name="frontik frontik-info1"
                  title="Info icon"
                />
              </li>
              <li>
                <Icon
                  size="xlg"
                  color="secondary"
                  animation="shake"
                  name="frontik frontik-heart"
                  title="Info icon"
                />
              </li>
            </ul>
          </section>
          <section className="components-section">
            <h2>FONT AWESOME</h2>
            <h4>Externally used icons (In this case FontAwesome)</h4>
            <ul className="demo-type-list demo-box">
              <li>
                <Icon name="fa fa-heart" color="primary" size="md" />
              </li>
              <li>
                <Icon
                  name="fa fa-twitter"
                  color="secondary"
                  size="md"
                  className="fa-solid"
                />
              </li>
              <li>
                <Icon
                  name="fa fa-earth"
                  color="warning"
                  size="md"
                  className="fa-solid"
                />
              </li>
            </ul>
          </section>
        </section>
        <FrontikIcons />
      </main>
    </>
  );
};

export { IconPage };
