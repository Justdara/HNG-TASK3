import React, { useRef, useState } from "react";
import "./Login.css";
import { auth } from "../firebase";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");

  const extractErrorMessage = (errorMessage) => {
    // Remove "Firebase: " and "auth/" from the error message
    return errorMessage.replace("Firebase: ", "").replace("auth/", "");
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
        <input
          ref={passwordRef}
          required
          type="password"
          placeholder="password"
        />

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
