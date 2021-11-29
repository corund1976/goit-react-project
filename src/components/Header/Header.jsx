// import s from "Header.module.css";

const Header = () => {
  return (
    <div>
      <p>Kapu$ta</p>
      <p>Hi, username!</p>
      <button type="button" className={s.btnExit}>
        Exit
      </button>
    </div>
  );
};

export default Header;
