import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsAuthenticated } from 'redux/auth/selectors/authSelectors';

function PublicRoute({ isAuthenticated, redirectTo, children, ...routeProps }) {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}

export default PublicRoute;