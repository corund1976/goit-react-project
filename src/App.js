import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import Header from 'components/Header';
import Container from 'components/Container';
import Section from 'components/Section';


import { Routes, PublicRoute, PrivateRoute } from 'routes';
import { authOperations, authSelectors } from 'redux/auth';
import api from 'services/kapusta-api';
import './App.css';

const AuthPage = lazy(() =>
  import('/pages/AuthPage' /* webpackChunkName: "AuthPage" */),
);
const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const ExpensePage = lazy(() =>
  import('./pages/ExpensePage' /* webpackChunkName: "ExpensePage" */),
);
const IncomePage = lazy(() =>
  import('./pages/IncomePage' /* webpackChunkName: "IncomePage" */),
);
const ReportPage = lazy(() =>
  import('./pages/ReportPage' /* webpackChunkName: "ReportPage" */),
);

function App() {
  const token = useSelector(authSelectors.getToken);
  useEffect(() => {
    if (token) api.token.set(token);
  }, [token]);

  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const dispatch = useDispatch();
  useEffect(() =>
    dispatch(authOperations.fetchCurrentUser()), [dispatch]);
  
  const location = useLocation();
  let bgStyle = (location.pathname === '/auth') ? 'main-bg-auth' : 'main-bg';
  
  return (
    <Container>
      {isFetchingCurrentUser ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader type="Rings" color="#00BFFF" height={200} width={200} />
        </div>
      ) : (
        <Section>
          <Header />
          <div className={bgStyle}>
            <Suspense fallback={
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Loader type="Rings" color="#00BFFF" height={100} width={100} />
                </div>}>
              <Switch>
                <PublicRoute path={Routes.auth} restricted redirectTo={Routes.home}>
                  <AuthPage />
                </PublicRoute>

                <PrivateRoute exact path={Routes.home} redirectTo={Routes.auth}>
                  <HomePage />
                </PrivateRoute>

                <PrivateRoute path={Routes.expense} redirectTo={Routes.auth}>
                  <ExpensePage />
                </PrivateRoute>

                <PrivateRoute path={Routes.income} redirectTo={Routes.auth}>
                  <IncomePage />
                </PrivateRoute>

                <PrivateRoute path={Routes.report} redirectTo={Routes.auth}>
                  <ReportPage />
                </PrivateRoute>
              </Switch>
            </Suspense>
          </div>
        </Section>
      )}
    </Container>
  );
}

export default App;