import React from "react";
import { Redirect, Router } from "@reach/router";
import { Provider } from 'react-redux';
import routes from "./routes";
import NotFound from "./NotFound";
import useRoutes from "./hooks/useRoutes";
import store from './store';


export default () => {
  const { embeddedRoutes, defaultRoute } = useRoutes(routes);  
  return (
    <Provider store={store}>
      <Router>
        {embeddedRoutes}
        {defaultRoute && <Redirect from="/" to={defaultRoute.redirect || defaultRoute.path} noThrow />}
        <NotFound path="404"></NotFound>
      </Router>
    </Provider>
  );
};
