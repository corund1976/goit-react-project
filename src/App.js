import { Suspense, lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

import Header from "components/Header";
import MainPage from "components/MainPage";
import Section from "components/Section";
import UniversalModal from "components/Modal/UniversalModal";

import { routes, PublicRoute, PrivateRoute } from "routes";
import { getAccessToken, getSid } from "redux/auth/authSelectors";
import { authOperations } from "redux/auth";
import transactionOperations from "redux/transactions/transactionOperations";

import s from "components/Modal/Modal.module.css";
import { userOperations } from "redux/user";
import { categoriesOperations } from "redux/categories";

const AuthPage = lazy(() =>
  import('pages/AuthPage' /* webpackChunkName: 'AuthPage' */)
);
const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: 'HomePage' */)
);
const ReportPage = lazy(() =>
  import('pages/ReportPage' /* webpackChunkName: 'ReportPage' */)
);

function App() {
  const dispatch = useDispatch();

  const accessToken = useSelector(getAccessToken);
  const sid = useSelector(getSid);

  useEffect(() => {
    if (accessToken) {
      dispatch(authOperations.handleRefresh({ sid }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (accessToken) {
      dispatch(userOperations.handleGetUserInfo());
      dispatch(transactionOperations.handleGetIncome());
      dispatch(transactionOperations.handleGetExpense());
      dispatch(categoriesOperations.handleGetIncomeCategories());
      dispatch(categoriesOperations.handleGetExpenseCategories());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  const [showModal, setShowModal] = useState(false);
  
  const toggleModal = () => setShowModal((prevState) => !prevState);

  const handleLogOut = () => {
    dispatch(authOperations.handleLogout());
    toggleModal();
  };
  
  return (
    <>
      <Header onClick={toggleModal} />

      <MainPage>
        <Section>
          {showModal && (
            <UniversalModal toggleModal={toggleModal}>
              <p className={s.modalTitle}>Вы действительно хотите выйти?</p>
              <button
                type="button"
                onClick={handleLogOut}
                className={s.modalBtn}
              >
                Да
              </button>
            </UniversalModal>
          )}
          <Suspense
            fallback={
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Loader type="Rings" color="#00BFFF" height={100} width={100} />
              </div>
            }
          >
            <Switch>
              <PublicRoute path={routes.auth} redirectTo={routes.expense}>
                <AuthPage />
              </PublicRoute>

              <PrivateRoute path={routes.main} redirectTo={routes.auth}> {/* mobile */}
                <HomePage />
              </PrivateRoute>

              <PrivateRoute path={routes.expense} redirectTo={routes.auth}>
                <HomePage />
              </PrivateRoute>

              <PrivateRoute path={routes.income} redirectTo={routes.auth}>
                <HomePage />
              </PrivateRoute>

              <PrivateRoute path={routes.report} redirectTo={routes.auth}>
                <ReportPage />
              </PrivateRoute>

              <Redirect to={routes.auth} />
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

              // <PrivateRoute exact path={routes.home} redirectTo={routes.auth}>
              //   <HomePage />
              // </PrivateRoute>

              // <PrivateRoute path={routes.expense} redirectTo={routes.auth}>
              //   <ExpensePage />
              // </PrivateRoute>

              // <PrivateRoute path={routes.income} redirectTo={routes.auth}>
              //   <IncomePage />
              // </PrivateRoute>


