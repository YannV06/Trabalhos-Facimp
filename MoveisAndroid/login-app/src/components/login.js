import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <img src="/logo.png" alt="Logo" className="logo" />

      <div className="form-group">
        <label>
          <span className="icon">👤</span>
          <input type="text" placeholder="Enter Username" />
        </label>
      </div>

      <div className="form-group">
        <label>
          <span className="icon">🔒</span>
          <input type="password" placeholder="Enter Password" />
        </label>
      </div>

      <button className="btn login">Login</button>
      <button className="btn create">Create Account</button>

      <div className="fingerprint">
        <img src="/fingerprint.png" alt="Fingerprint Icon" />
      </div>
    </div>
  );
};

export default Login;
