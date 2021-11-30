import s from "./PageTitle.module.css";
import logo from "../../images/mainImg/Logo.svg";

function PageTitle() {
  return (
    <div className={s.authTitleDiv}>
      <img className={s.img} src={logo} alt="kapusta" />
      <h1 className={s.title}>Smart Finance</h1>
    </div>
  );
}

export default PageTitle;
