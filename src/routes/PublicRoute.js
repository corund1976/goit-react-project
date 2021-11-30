import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsAuthorized } from 'redux/selectors/authSelectors';

function PublicRoute({ isAuthorized, redirectTo, children, ...routeProps }) {
  const isLoggedIn = useSelector(getIsAuthorized);

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