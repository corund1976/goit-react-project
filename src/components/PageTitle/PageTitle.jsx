import s from "./PageTitle.module.css";
import logo from "../../images/mainImg/Logo.svg";

function PageTitle() {
  return (
    <>
      <img className={s.img} src={logo} alt="kapusta" />
      <h1 className={s.title}>Smart Finance</h1>
    </>
  );
}

export default PageTitle;
