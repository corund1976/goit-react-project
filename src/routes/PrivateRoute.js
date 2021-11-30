import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { getIsAuthorized } from 'redux/selectors/authSelectors';

function PrivateRoute({ children, redirectTo = '/', ...routeProps }) {
  const isLoggedIn = useSelector(getIsAuthorized);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

export default PrivateRoute;