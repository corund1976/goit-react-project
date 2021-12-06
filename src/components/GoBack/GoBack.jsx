import { Link, useLocation } from "react-router-dom";
import { useWindowSize } from "react-use-size";

import goBack from "images/goBack.png";
import s from "./GoBack.module.css";

function GoBack() {
  const { width } = useWindowSize();
  const { pathname } = useLocation();
  const currentPath = pathname.slice(1);

  return (
    <>
      {width < 768 ? (
        <Link to={"main"} className={s.goBackLink}>
          <img src={goBack} alt="go back to reports" className={s.iconBack} />
          Вернуться на главную
        </Link>
      ) : (
        <Link
          to={currentPath === "report" ? "/expense" : "main"}
          className={s.goBackLink}
        >
          <img src={goBack} alt="go back to reports" className={s.iconBack} />
          Вернуться на главную
        </Link>
      )}
    </>
  );
}

export default GoBack;
