import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { getIsAuthorized } from 'redux/selectors/authSelectors';

function PublicRoute({ children, restricted = false, redirectTo = '/', ...routeProps }) {
  const isLoggedIn = useSelector(getIsAuthorized);
  const shouldRedirect = isLoggedIn && restricted;
  
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo}/> : children}
    </Route>
  );
};

export default PublicRoute;