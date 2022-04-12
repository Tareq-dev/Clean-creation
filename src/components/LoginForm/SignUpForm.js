import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase.init";

const SignUpForm = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  

  if (user) {
    navigate("/");
  }
  const handleCreateUser = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password, confirmPassword);
    if (password !== confirmPassword) {
     setError("You have to your password");
     return;
   }
  };
  return (
    <div className="d-flex justify-content-center mt-5 pt-5">
      <form onSubmit={handleCreateUser} className="login p-5">
        <label htmlFor="name">Your name</label>
        <br />
        <input
          className="w-100 rounded-3 border-0 py-1"
          type="text"
          name="name"
          id=""
          required
        />
        <br />
        <label htmlFor="email">Your email address</label>
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="w-100 rounded-3 border-0 py-1"
          type="email"
          name="email"
          id=""
          required
        />
        <br />
        <label htmlFor="password">Your password</label>
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="w-100 rounded-3 border-0 py-1"
          type="password"
          name="password"
          id=""
          required
        />
        <br />
        <label htmlFor="password">Confirm your password</label>
        <br />
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-100 rounded-3 border-0 py-1"
          type="password"
          name="password"
          id=""
          required
        />
        <br />
        <span className="text-danger fw-bold">{error}</span>
        <button className="w-100 mt-3 text-light fw-bold bg-dark">
          Register
        </button>
        <div className="d-flex mt-1">
          <p>Already have an acount?</p>
          <Link className="mx-1" to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
