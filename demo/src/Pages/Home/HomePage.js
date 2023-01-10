import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./HomePage.scss";

// hooks
import { useWindowScroll } from "Hooks";

const HomePage = () => {
  useWindowScroll({ x: 0, y: 0, atReload: true });

  return (
    <>
      <Helmet>
        <title>Frontik home page</title>
      </Helmet>
      <main>
        <h1 className="responsive-title">Frontik Demo</h1>
        <section className="component-section">
          <nav>
            <ul className="heading">
              <li>
                <Link className="demo-box" to="/button">
                  Button
                </Link>
              </li>
              <li>
                <Link className="demo-box" to="/modal">
                  Modal
                </Link>
              </li>
              <li>
                <Link className="demo-box" to="/device">
                  Device
                </Link>
              </li>
              <li>
                <Link className="demo-box" to="/icon">
                  Icon
                </Link>
              </li>
              <li>
                <Link className="demo-box" to="/notification">
                  Notification
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </>
  );
};

export { HomePage };
