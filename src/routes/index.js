import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {
  HomePage,
  AboutPage,
  ButtonsPage,
  ComponentsPage,
  TodoPage,
  BigListPage,
  BigTablePage,
  LoginPage,
  UsersPage
} from 'pages';

class AppRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route name="home" exact path="/" component={HomePage} />
        <Route name="about" path="/about" component={AboutPage} />
        <Route name="buttons" path="/buttons" component={ButtonsPage} />
        <Route name="todos" path="/todos" component={TodoPage} />
        <Route name="components" path="/components" component={ComponentsPage} />
        <Route name="biglist" path="/biglist" component={BigListPage} />
        <Route name="bigtable" path="/bigtable" component={BigTablePage} />
        <Route name="login" path="/login" component={LoginPage} />
        <Route name="users" path="/users/:id?" component={UsersPage} />
        <Redirect from="/" to="home" />
      </Switch>
    );
  }
}

export default AppRoutes;
