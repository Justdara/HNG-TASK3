import React, { useRef, useState } from "react";
import "./Login.css";
import { auth } from "../firebase";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const extractErrorMessage = (errorMessage) => {
    // Remove "Firebase: " and "auth/" from the error message
    return errorMessage.replace("Firebase: ", "").replace("auth/", "");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        setError(extractErrorMessage(err.message));
      });
  };

  return (
    <div className="login-card">
      <form>
        <h1>LOG IN</h1>
        {error && <p className="error">{error}</p>}
        <input ref={emailRef} required type="email" placeholder="email" />
        <div className="password-input">
          <input
            ref={passwordRef}
            required
            type={passwordVisible ? "text" : "password"}
            placeholder="password"
          />
          <div className="password-icon" onClick={togglePasswordVisibility}>
            {passwordVisible ? (
              <VisibilityOffIcon fontSize="2px" />
            ) : (
              <VisibilityIcon fontSize="2px" />
            )}
          </div>
        </div>
        <h5>
          New User?
          <span onClick={signUp} className="sign-up">
            Click here to sign up
          </span>
        </h5>
        <button onClick={logIn}>LOG IN</button>
      </form>
    </div>
  );
};

export default Login;
