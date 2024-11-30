import React, { useState } from 'react';
import "./css/main.css"; 

const LoginRegister = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const login = async () => {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    console.log(username, password);
    await fetch("http://127.0.0.1:3000/login", { 
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then((response => response.json()))
    .then((data) => {
        console.log(data);
    }).catch(rejected => {
        console.log(rejected);
    });
  }

  return (
    <div id="wrapper" className="wrapper">
      {/* Login Form */}
      {showLogin ? (
        <div className="form-box login">
            <h1>Log In</h1>
            <div className="input-box">
              <input
                type="text"
                id="loginUsername"
                name="username"
                placeholder="Username"
                required
              />
              <i className="icon user-icon"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                id="loginPassword"
                name="password"
                placeholder="Password"
                required
              />
              <i className="icon lock-icon"></i>
            </div>
            <button onClick={login}>Log In</button>
            <div className="register-link">
              <p>
                Don't have an account? 
                <button type="button" onClick={toggleForm}>Register</button>
              </p>
            </div>
        </div>
      ) : (
        // Register Form
        <div className="form-box register">
          <form id="registerForm">
            <h1>Register</h1>
            <div className="input-box">
              <input
                type="text"
                id="registerUsername"
                name="username"
                placeholder="Username"
                required
              />
              <i className="icon user-icon"></i>
            </div>
            <div className="input-box">
              <input
                type="email"
                id="registerEmail"
                name="email"
                placeholder="Email"
                required
              />
              <i className="icon email-icon"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                id="registerPassword"
                name="password"
                placeholder="Password"
                required
              />
              <i className="icon lock-icon"></i>
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
              <p>
                Already have an account? 
                <button type="button" onClick={toggleForm}>Log In</button>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginRegister;
