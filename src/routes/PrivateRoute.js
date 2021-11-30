import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsAuthorized } from 'redux/selectors/authSelectors';

function PrivateRoute({ isAuthenticated, redirectTo, children, ...routeProps }) {
  const isLoggedIn = useSelector(getIsAuthorized);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

export default PrivateRoute;