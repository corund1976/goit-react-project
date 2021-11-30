import logo from "../../images/mainImg/Logo.svg";
import s from "./MainPage.module.css";
import Container from "../Container/Container";

const MainPage = ({ children }) => {
  return (
    <div>
      <div className={s.top}>
        {" "}
        <Container>
          <img className={s.img} src={logo} alt="kapusta" />
          <h1 className={s.title}>Smart Finance</h1>
        </Container>
      </div>

      <div className={s.bottom}>{children}</div>
    </div>
  );
};

export default MainPage;
