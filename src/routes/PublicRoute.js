import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { getIsAuthorized } from 'redux/auth/authSelectors';

function PublicRoute({ children, redirectTo = '/', ...routeProps }) {
  const isLoggedIn = useSelector(getIsAuthorized);
  
  return (
    <Route {...routeProps}>
      {isLoggedIn
        ?
        <Redirect to={redirectTo} />
        :
        children}
    </Route>
  );
};

export default PublicRoute;