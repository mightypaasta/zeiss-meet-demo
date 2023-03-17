/******************************************************************************************************************************************************
Copyright (c) 2023 Carl Zeiss Meditec AG All rights reserved.  * Use of this source code is governed by a BSD-style  * license that can be found in the 
LICENSE file.
*********************************************************************************************************************************************************/
import { useState } from "react";
import "./register.css";

interface IState {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [state, setState] = useState<IState>({
    username: "",
    email: "",
    password: "",
  });

  const [showUsernamePrompt, setShowUsernamePrompt] = useState<boolean>(false);
  const [showEmailPrompt, setShowEmailPrompt] = useState<boolean>(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState<boolean>(false);

  const [usernameInputToggle, setUsernameInputToggle] =
    useState<boolean>(false);
  const [emailInputToggle, setEmailInputToggle] = useState<boolean>(false);
  const [passwordInputToggle, setPasswordInputToggle] =
    useState<boolean>(false);

  const updateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    if (e.target.name == "username"){
       setShowUsernamePrompt(false);
       setUsernameInputToggle(false);
    }
    if (e.target.name == "email"){
      setShowEmailPrompt(false);
      setEmailInputToggle(false);
    }
    if (e.target.name == "password"){
      setShowPasswordPrompt(false);
      setPasswordInputToggle(false);
    }
  };

  const clickHandler = () => {
    if (state.username == "") {
      setShowUsernamePrompt(true);
      setUsernameInputToggle(true);
    }
    if (state.email == "") {
      setShowEmailPrompt(true);
      setEmailInputToggle(true);
    }
    if (state.password == "") {
      setShowPasswordPrompt(true);
      setPasswordInputToggle(true);
    }
  };

  return (
    <div className="container_box">
      <div className="navbar">
        <h2>Welcome To ZEISS MEET</h2>
      </div>
      <div className="register-ui">
        <div className="register-header">
          <h2>Register</h2>
        </div>
        <div className="line">
          <hr />
        </div>
        <div className="register-form">
          <label htmlFor="" className="register-label">
            Username*
          </label>
          <input
            className={
              usernameInputToggle
                ? "register-username-input-toggle"
                : "register-input"
            }
            type="text"
            placeholder="username"
            name="username"
            value={state.username}
            onChange={updateHandler}
          />
          {showUsernamePrompt && (
            <p className="required-prompt">Username is required</p>
          )}
          <label htmlFor="" className="register-label">
            Email*
          </label>
          <input
            className={
              emailInputToggle
                ? "register-email-input-toggle"
                : "register-input"
            }
            type="email"
            placeholder="username@gmail.com"
            name="email"
            value={state.email}
            onChange={updateHandler}
          />
          {showEmailPrompt && (
            <p className="required-prompt">Email is required</p>
          )}

          <label htmlFor="" className="register-label">
            Password*
          </label>
          <input
            className={
              passwordInputToggle
                ? "register-password-input-toggle"
                : "register-input"
            }
            type="password"
            placeholder="........"
            name="password"
            value={state.password}
            onChange={updateHandler}
          />
          {showPasswordPrompt && (
            <p className="required-prompt">Password is required</p>
          )}

          <button className="register-form-btn" onClick={clickHandler}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
