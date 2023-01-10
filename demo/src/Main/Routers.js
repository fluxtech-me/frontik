import React from "react";
import { Router, Route, Switch } from "react-router-dom";

// services
import { browserHistory } from "Services/browserHistory";

// pages
import { HomePage } from "Pages/Home/HomePage";

import { ButtonPage } from "Pages/Button/ButtonPage";
import { ModalPage } from "Pages/Modal/ModalPage";
import { DevicePage } from "Pages/Device/DevicePage";
import { IconPage } from "Pages/Icon/IconPage";
import { NotificationPage } from "Pages/Notification/NotificationPage";

import { NotFoundPage } from "Pages/NotFound/NotFoundPage";

const Routers = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={HomePage} />

      <Route exact path="/button" component={ButtonPage} />
      <Route exact path="/modal" component={ModalPage} />
      <Route exact path="/device" component={DevicePage} />
      <Route exact path="/icon" component={IconPage} />
      <Route exact path="/notification" component={NotificationPage} />

      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export { Routers };
