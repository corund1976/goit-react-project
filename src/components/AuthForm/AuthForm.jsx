import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "react-google-login";

import s from "./AuthForm.module.css";
import googleSymbol from "images/header-authform/google-symbol.png";
import authOperations from "redux/auth/authOperations";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const changeEmailValue = (event) => setEmail(event.target.value);
  const changePasswordValue = (event) => setPassword(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    !validateEmail(email)
      ? setEmailError("Некорректно введен e-mail.")
      : setEmailError("");

    !validatePassword(password)
      ? setPasswordError("Пароль должен быть от 4 до 16 символов.")
      : setPasswordError("");

    !email && setEmailError("это обязательное поле");
    !password && setPasswordError("это обязательное поле");

    if (validateEmail(email) && validatePassword(password)) {
      dispatch(authOperations.handleLogin({ email, password }));
    }
  };

  const onRegistration = () => {
    !validateEmail(email)
      ? setEmailError("Некорректно введен e-mail.")
      : setEmailError("");

    !validatePassword(password)
      ? setPasswordError("Пароль должен быть от 4 до 16 символов.")
      : setPasswordError("");

    !email && setEmailError("это обязательное поле");
    !password && setPasswordError("это обязательное поле");

    if (validateEmail(email) && validatePassword(password)) {
      dispatch(authOperations.handleRegister({ email, password }));
    }
  };

  const validateEmail = (email) => {
    // eslint-disable-next-line
    const response =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return response.test(email);
  };

  const validatePassword = (password) => {
    return Boolean(password.length >= 4 && password.length <= 16);
  };

  const errorMessage = () => {
    if (error === "Request failed with status code 404") {
      return "Пользователь с таким email еще не зарегистрирован";
    } else if (error === "Request failed with status code 401") {
      return "Некорректный пароль или email";
    } else if (error === "Request failed with status code 409") {
      return "Пользователь с таким email уже зарегистрирован";
    }
  };

  const clientId =
    "263285736930-p050d1objdtu7vmkkn1md1vv86ed3eem.apps.googleusercontent.com";

  const responseGoogle = (response) => {
    // console.log(response.tokenId);
    dispatch(authOperations.handleGoogleAuth(response.tokenId));
  };

  return (
    <>
      <form onSubmit={onSubmit} className={s.authForm}>
        <div>
          <p className={s.inputInfo}>
            Вы можете авторизоваться с помощью Google Account:
          </p>
          <div className={s.googleInfo}>
            <GoogleLogin
              clientId={clientId}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className={s.googelBtn}
                  type="submit"
                >
                  <img
                    src={googleSymbol}
                    alt="googleSymbol"
                    className={s.googleSymbol}
                  />
                  Google
                </button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              // cookiePolicy={"single_host_origin"}
            />
          </div>
          <p className={s.inputInfo}>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </p>
          <div className={s.inputDiv}>
            <label htmlFor="AuthForm__email" className={s.inputTitle}>
              {emailError && <span style={{ color: "red" }}>*</span>}
              Электронная почта:
            </label>
            <input
              type="email"
              name="email"
              id="AuthForm__email"
              value={email}
              onChange={changeEmailValue}
              placeholder="name@mail.com"
              className={s.inputForm}
            />
            <p className={s.errorMessage}>{emailError}</p>
          </div>
          <div>
            <label htmlFor="AuthForm__password" className={s.inputTitle}>
              {passwordError && <span style={{ color: "red" }}>*</span>}Пароль:
            </label>
            <div className={s.pswInp}>
              <input
                type={isPasswordShown ? "text" : "password"}
                name="password"
                id="AuthForm__password"
                value={password}
                onChange={changePasswordValue}
                placeholder="Пароль"
                className={s.inputForm}
              />
              <button
                type="button"
                onClick={() => setIsPasswordShown(!isPasswordShown)}
                className={s.showPassBtn}
              >
                {isPasswordShown ? "hide" : "show"}
              </button>
            </div>
            <p className={s.errorMessage}>{passwordError}</p>
          </div>
        </div>
        <div className={s.btnDiv}>
          <button className={s.inputBtn} type="submit">
            Войти
          </button>
          <button className={s.inputBtn} type="button" onClick={onRegistration}>
            Регистрация
          </button>
        </div>
        <p>{errorMessage()}</p>
      </form>
    </>
  );
}

export default AuthForm;
