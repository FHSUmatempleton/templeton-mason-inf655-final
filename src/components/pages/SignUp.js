import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

//firestore modules
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../../firebase.config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import Card from "../shared/Card";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      //Get values and send it getAut
      const auth = getAuth();

      //Register user with createUserWithEmailAndPassword
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredentials.user;
      updateProfile(auth.currentUser, { displayName: name });

      //copy of formData
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timeStamp = serverTimestamp();
      console.log(formDataCopy);
      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const { name, email, password } = formData;

  return (
    <Card>
      <header>
        <p className="pageHeader">Welcome to Task Manager Please Sign in</p>
      </header>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="nameInput"
          placeholder="Name"
          id="name"
          value={name}
          onChange={onChange}
        />
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
        <div className="singUpBar">
          <button className="signUpButton">Sign Up</button>
        </div>
      </form>
      <Link to="/sign-in" className="registerLink">
        Sign in instead
      </Link>
    </Card>
  );
}