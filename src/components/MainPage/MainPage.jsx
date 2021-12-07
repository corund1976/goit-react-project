import { useSelector } from 'react-redux';

import { authSelectors } from 'redux/auth';

import Container from 'components/Container';

import s from './MainPage.module.css';

const MainPage = ({ children }) => {
  const isLogin = useSelector(authSelectors.getIsAuthorized);

  return (
    <div className={isLogin ? s.mainAuth : s.main}>
      <div className={isLogin ? s.topAuth : s.top}></div>
      <Container>{children}</Container>
    </div>
  );
};

export default MainPage;
