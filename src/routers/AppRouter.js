import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { PublicRoutes } from './PublicRoutes';
export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route path="/" component={PublicRoutes} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};
