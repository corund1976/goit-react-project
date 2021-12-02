import { useSelector } from "react-redux";
import { getIsAuthorized } from "redux/auth/authSelectors";

import s from "./MainPage.module.css";
import Container from "components/Container";

const MainPage = ({ children }) => {
  const isLogin = useSelector(getIsAuthorized);

  return (
    <div className={isLogin ? s.mainAuth : s.main}>
      <div className={isLogin ? s.topAuth : s.top}></div>
      <Container>{children}</Container>
    </div>
  );
};

export default MainPage;
