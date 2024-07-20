// src/components/Login.js
import React from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import img from "../images/login.jpg";
const Login = () => {
  const nav = useNavigate();
  const handleLog = () => {
    nav("/home");
  };
  return (
    <div className="login-container">
      <div className="login-image-container">
        <img src={img} alt="Microsoft To Do" />
      </div>
      <div className="login-form-container">
        <h2>Microsoft To Do</h2>
        <p>To Do gives you focus, from work to play.</p>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required />
          </div>
          <button type="submit" onClick={handleLog}>
            Get started
          </button>
        </form>
        <a href="/learn-more">Learn more</a>
      </div>
    </div>
  );
};

export default Login;
