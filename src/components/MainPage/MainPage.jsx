import { useSelector } from "react-redux";
import { getIsAuthorized } from "redux/auth/authSelectors";

import s from "./MainPage.module.css";
import Container from "components/Container";

const MainPage = ({ children }) => {
  const isLogin = useSelector(getIsAuthorized);
  
  return (
    <div className={isLogin ? s.topAuth : s.top}>
      <Container>
        {children}
      </Container>
      <div className={isLogin ? s.bottomAuth : s.bottom}></div>
    </div>
  );
};

export default MainPage;
