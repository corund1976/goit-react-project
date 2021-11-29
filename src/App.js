import React, { Suspense, lazy, useEffect } from "react";
import { useSelector } from "react-redux";
import { Switch, useLocation } from "react-router-dom";

import Header from "components/Header/Header";
import FallBack from "/components/FallBackContainer/FallBackContainer";

import { Routes, PublicRoute, PrivateRoute } from "/routes";
import * as authSelectors from "/redux/selectors/authSelectors";
import api from "/services/kapusta-api";
import "./App.css";

const AuthPage = lazy(() =>
  import("/pages/AuthPage" /* webpackChunkName: "AuthPage" */)
);
const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "HomePage" */)
);
const ExpensePage = lazy(() =>
  import("./pages/ExpensePage" /* webpackChunkName: "ExpensePage" */)
);
const IncomePage = lazy(() =>
  import("./pages/IncomePage" /* webpackChunkName: "IncomePage" */)
);
const ReportPage = lazy(() =>
  import("./pages/ReportPage" /* webpackChunkName: "ReportPage" */)
);

export default function App() {
  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    if (token) api.token.set(token);
  }, [token]);

  const location = useLocation();

  let bgStyle = location.pathname === "/auth" ? "main-bg-auth" : "main-bg";

  return (
    <>
      <Header />
      <div className={bgStyle}>
        <Suspense fallback={<FallBack />}>
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
    </>
  );
}
