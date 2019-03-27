import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {
  HomePage,
  AboutPage,
  ContactPage,
  ButtonsPage,
  CardsPage
} from 'pages';

class AppRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route name="home" exact path="/" component={HomePage} />
        <Route name="about" path="/about" component={AboutPage} />
        <Route name="buttons" path="/buttons" component={ButtonsPage} />
        <Route name="cards" path="/cards" component={CardsPage} />
        <Route name="contact" path="/contact" component={ContactPage} />
        <Redirect from="/" to="home" />
      </Switch>
    );
  }
}

export default AppRoutes;
