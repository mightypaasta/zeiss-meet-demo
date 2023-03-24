/******************************************************************************************************************************************************
Copyright (c) 2023 Carl Zeiss Meditec AG All rights reserved.  * Use of this source code is governed by a BSD-style  * license that can be found in the 
LICENSE file.
*********************************************************************************************************************************************************/
import React, { useState } from "react";
import "./login.css";
import { useNavigate, Navigate } from "react-router-dom";
import { getLogin } from "../../core/actioncreators/LoginActionCreator";
import UserData from "../../core/models/UserData";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UserInfoState } from "../../core/reducers/LoginReducer";
import { IRootState } from "../../core/reducers/RootReducer";
import { Modal } from "../Modal/modal";
import { useModal } from "../Modal/useModal";
import CustomizedDialogs from "../../components/common/modals/CustomModal";

function LoginDialog(props: any): JSX.Element {
  const isLogin = props.isLogin;
  const data = {
    title: "Login failed",
    body: "Sorry, you have entered invalid login details. Please try again or contact our customer care",
    actionText: "Okay",
  };
  if (isLogin) {
    return <CustomizedDialogs {...data} />;
  }
  return <div />;
}

const Login: React.FC = () => {
  let navigator = useNavigate();
  let dispatch = useDispatch();

  let loginState = useSelector(
    (state: IRootState): UserInfoState => state.login
  );
  let loginSuccess = loginState.isLoginSuccess;

  const [state, setState] = useState<UserData>({
    email: "",
    password: "",
  });

  const [emailInputToggle, setEmailInputToggle] = useState<boolean>(false);
  const [passwordInputToggle, setPasswordInputToggle] =
    useState<boolean>(false);
  const [login, setLogin] = React.useState(false);

  const [showEmailPrompt, setShowEmailPrompt] = useState<boolean>(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState<boolean>(false);

  const updateHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    setEmailInputToggle(false);
    setPasswordInputToggle(false);
    if (e.target.name == "email") {
      setShowEmailPrompt(false);
    }
    if (e.target.name == "password") {
      setShowPasswordPrompt(false);
    }
  };

  const clickHandler = () => {
    if (state.email == "") {
      setShowEmailPrompt(true);
      setEmailInputToggle(true);
    }
    if (state.password == "") {
      setShowPasswordPrompt(true);
      setPasswordInputToggle(true);
    }
    if (state.email.length > 0 && state.password.length > 0) {
      dispatch(getLogin(state));
      console.log("loginState success value", loginSuccess);
      if (loginSuccess) {
        console.log("LOL Login successfull");
        navigator("/dashboard");
      } else {
        setLogin(true);
      }
    }
  };

  const registerClickHandler = () => {
    navigator("/register");
  };

  const obj = { isLogin: login };

  return (
    <div>
      <LoginDialog {...obj} />

      <div className="container_box">
        <div className="navbar">
          <h2>Welcome To ZEISS MEET</h2>
        </div>
        <div className="login-ui">
          <div className="login-header">
            <h2>Login</h2>
          </div>
          <div className="line">
            <hr />
          </div>
          <div className="login-form">
            <label htmlFor="" className="login-label login-label-email">
              Email*
            </label>
            <input
              className={
                emailInputToggle ? "login-email-input-toggle" : "login-input"
              }
              type="email"
              placeholder="username@gmail.com"
              value={state.email}
              name="email"
              onChange={updateHandler}
              required
            />
            {showEmailPrompt && (
              <p className="required-prompt">email is required</p>
            )}

            <label htmlFor="" className="login-label login-label-password">
              Password*
            </label>
            <input
              className={
                passwordInputToggle
                  ? "login-password-input-toggle"
                  : "login-input"
              }
              type="password"
              placeholder="....."
              value={state.password}
              name="password"
              onChange={updateHandler}
              required
            />
            {showPasswordPrompt && (
              <p className="required-prompt">password is required</p>
            )}

            <button className="btn login-btn" onClick={clickHandler}>
              Login
            </button>
            <button className="btn register-btn" onClick={registerClickHandler}>
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
