import React from "react";
import "./Registration.css";
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Registration = () => {
  return (
    <div className="registration-container">
      <h2>Registration</h2>

      <div className="input-group">
        <input type="text" placeholder="Username" />
        <span className="icon">👤</span>
      </div>

      <div className="input-group">
        <input type="email" placeholder="Email" />
        <span className="icon">📧</span>
      </div>

      <div className="input-group">
        <input type="password" placeholder="Password" />
        <span className="icon">🔒</span>
      </div>

      <button className="register-btn">Register</button>

      <p className="or-text">or register with social platforms</p>

      <div className="social-icons">
        <button className="social-btn"><FaGoogle /></button>
        <button className="social-btn"><FaFacebookF /></button>
        <button className="social-btn"><FaGithub /></button>
        <button className="social-btn"><FaLinkedinIn /></button>
      </div>
    </div>
  );
};

export default Registration;
