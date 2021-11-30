import s from "./MainPage.module.css";
import Container from "../Container/Container";
import PageTitle from "components/PageTitle/PageTitle";
import AuthPage from "pages/AuthPage";
import { useSelector } from "react-redux";
import { getIsAuthorized } from "redux/auth/authSelectors";

const MainPage = ({ children }) => {
  const isLogin = useSelector(getIsAuthorized);
  console.log(isLogin);
  return (
    <div>
      <div className={isLogin ? s.topAuth : s.top}>
        {" "}
        <Container>
          <AuthPage />
          {/* <PageTitle /> */}
          {children}
        </Container>
        <div className={isLogin ? s.bottomAuth : s.bottom}></div>
      </div>
    </div>
  );
};

export default MainPage;
