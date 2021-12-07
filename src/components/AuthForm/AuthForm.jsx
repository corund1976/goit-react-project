import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';

import { authOperations } from 'redux/auth';

import Checkbox from '@mui/material/Checkbox';
import { orange } from '@mui/material/colors';

import googleSymbol from 'images/header-authform/google-symbol.png';

import s from './AuthForm.module.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function AuthForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const changeEmailValue = (event) => setEmail(event.target.value);
  const changePasswordValue = (event) => setPassword(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    !validateEmail(email)
      ? setEmailError('Некорректно введен e-mail.')
      : setEmailError('');

    !validatePassword(password)
      ? setPasswordError('Пароль должен быть от 4 до 16 символов.')
      : setPasswordError('');

    if (validateEmail(email) && validatePassword(password)) {
      dispatch(authOperations.handleLogin({ email, password }));
    }
  };

  const onRegistration = () => {
    !validateEmail(email)
      ? setEmailError('Некорректно введен e-mail.')
      : setEmailError('');

    !validatePassword(password)
      ? setPasswordError('Пароль должен быть от 4 до 16 символов.')
      : setPasswordError('');

    // !email && setEmailError('это обязательное поле');
    // !password && setPasswordError('это обязательное поле');

    if (validateEmail(email) && validatePassword(password)) {
      dispatch(authOperations.handleRegister({ email, password }));
    }
  };

  const validateEmail = (email) => {
    const response =
      /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return response.test(email);
  };

  const validatePassword = (password) => {
    return Boolean(password.length > 3 && password.length < 17);
  };
  // Обработка ввода через GOOGLE
  const clientId =
    '263285736930-p050d1objdtu7vmkkn1md1vv86ed3eem.apps.googleusercontent.com';

  const responseGoogle = (response) => {
    const email = response.profileObj.email;
    const password = response.profileObj.googleId;
    dispatch(authOperations.handleRegister({ email, password }));
    dispatch(authOperations.handleLogin({ email, password }));
  };

  return (
    <form onSubmit={onSubmit} className={s.authForm}>
      {/* G O O G L E  а в т о р и з а ц и я */}
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
              type='button'
            >
              <img
                src={googleSymbol}
                alt='googleSymbol'
                className={s.googleSymbol}
              />
              Google
            </button>
          )}
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          // cookiePolicy={'single_host_origin'}
        />
      </div>
      {/* О Б Ы Ч Н А Я  а в т о р и з а ц и я */}
      <p className={s.inputInfo}>
        Или зайти с помощью e-mail и пароля, предварительно
        зарегистрировавшись:
      </p>

      <div className={s.inputDiv}>
        <label htmlFor='AuthForm__email' className={s.inputTitle}>
          {emailError && <span style={{ color: 'red' }}>*</span>}
          Электронная почта:
        </label>
        {/* И Н П У Т   И М Е Й Л */}
        <input
          type='email'
          name='email'
          id='AuthForm__email'
          value={email}
          onChange={changeEmailValue}
          pattern='[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$'
          placeholder='name@mail.com'
          className={s.inputForm}
          autoComplete="on"
          required
        />
        <p className={s.errorMessage}>{emailError}</p>
      </div>

      {/* П А Р О Л Ь : Ч Е К Б О К С + И Н П У Т */}
      <div className={s.pswInp}>
        <label htmlFor='AuthForm__password' className={s.inputTitle}>
          {passwordError && <span style={{ color: 'red' }}>*</span>}
          Пароль:
        </label>
        {/* Ч Е К Б О К С   П А Р О Л Ь */}
        <button
          type='button'
          onClick={() => setIsPasswordShown(!isPasswordShown)}
          className={s.showPassBtn}
        >
          <Checkbox
            {...label}
            defaultChecked
            sx={{
              color: orange[800],
              '&.Mui-checked': {
                color: orange[800],
              },
            }}
          />
        </button>
      </div>
      {/* И Н П У Т   П А Р О Л Ь */}
      <input
        type={isPasswordShown ? 'text' : 'password'}
        name='password'
        id='AuthForm__password'
        value={password}
        onChange={changePasswordValue}
        placeholder='Пароль'
        className={s.inputForm}
        autoComplete="on"
        required
      />
      <p className={s.errorMessage}>{passwordError}</p>

      <div className={s.btnDiv}>
      {/* К Н О П К И */}
        <button className={s.inputBtn} type='submit'>
          Войти
        </button>

        <button className={s.inputBtn} type='button' onClick={onRegistration}>
          Регистрация
        </button>

      </div>
    </form>
  );
}

export default AuthForm;
