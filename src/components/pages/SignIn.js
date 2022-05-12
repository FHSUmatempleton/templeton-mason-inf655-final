import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
//firebase aut
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Card from "../shared/Card";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const { email, password } = formData;

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const auth = getAuth();
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredentials.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <header>
        <p className="pageHeader">Welcome to Task Manager Please Sign in</p>
      </header>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          className="emailInput"
          placeholder="Email"
          id="email"
          value={email}
          onChange={onChange}
        />
        <div className="passwordInputDiv">
          <input
            type="password"
            className="passwordInput"
            placeholder="Password"
            id="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="singInBar">
          <button className="signInButton">Sign In</button>
        </div>
        <Link to="/forgot-password" className="forgotPasswordLink">
          Forgot Password
        </Link>
      </form>
      <Link to="/sign-up" className="registerLink">
        Sign up instead
      </Link>
    </Card>
  );
}