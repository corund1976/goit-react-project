import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import Header from 'components/Header';
import MainPage from 'components/MainPage';
import Section from 'components/Section';

import { routes, PublicRoute, PrivateRoute } from 'routes';
import { getAccessToken } from 'redux/auth/authSelectors';
import { getIncomeCategories } from 'redux/categories/categoriesSelectors';

import api from 'services/kapusta-api';

const AuthPage = lazy(() =>
	import('pages/AuthPage' /* webpackChunkName: "AuthPage" */)
);
const HomePage = lazy(() =>
	import('pages/HomePage' /* webpackChunkName: "HomePage" */)
);
const ExpensePage = lazy(() =>
	import('pages/ExpensePage' /* webpackChunkName: "ExpensePage" */)
);
const IncomePage = lazy(() =>
	import('pages/IncomePage' /* webpackChunkName: "IncomePage" */)
);
const ReportPage = lazy(() =>
	import('pages/ReportPage' /* webpackChunkName: "ReportPage" */)
);

function App() {
  const token = useSelector(getAccessToken);

	useEffect(() => {
		if (token) api.token.set(token);
  }, [token]);
  
  // const IncomeCategories = useSelector(getIncomeCategories);
  // console.log(IncomeCategories);

	// const dispatch = useDispatch();
	// useEffect(() =>
	//   dispatch(handleGetIncomeCategories()), [dispatch]);

	return (
		<>
			<Header />
			<MainPage>
				<Section>
					<Suspense
						fallback={
							<div style={{ display: 'flex', justifyContent: 'center' }}>
								<Loader type='Rings' color='#00BFFF' height={100} width={100} />
							</div>
						}
					>
						<Switch>
							<PublicRoute
								path={routes.auth}
								restricted
								redirectTo={routes.home}
							>
								<AuthPage />
							</PublicRoute>

							<PrivateRoute exact path={routes.home} redirectTo={routes.auth}>
								<HomePage />
							</PrivateRoute>

							<PrivateRoute path={routes.expense} redirectTo={routes.auth}>
								<ExpensePage />
							</PrivateRoute>

							<PrivateRoute path={routes.income} redirectTo={routes.auth}>
								<IncomePage />
							</PrivateRoute>

							<PrivateRoute path={routes.report} redirectTo={routes.auth}>
								<ReportPage />
							</PrivateRoute>
						</Switch>
					</Suspense>
				</Section>
			</MainPage>
		</>
	);
}

export default App;

// {
//   isFetchingCurrentUser ? (
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <Loader type='Rings' color='#00BFFF' height={200} width={200} />
//     </div>
//   )
// }
