import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { Eye, EyeOff, KeyRound, Mail } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPass = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {};

  const handleLoginForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main_container login">
      <div className="login_container">
        <div className="upper_div">

          <h2>Welcome Back Dear</h2>
          <p>Log in to your account</p>
        </div>
        <form onSubmit={handleLoginForm} className="login_form">
          <label htmlFor="Email">Email</label>

          <div className="inpu_div">
            <Mail width={"20px"} />
            <input
              type="email"
              placeholder="xyz@example.com"
              name="Email"
              id="Email"
            />
          </div>
          <label htmlFor="Password">Password</label>
          <div className="inpu_div">
            <KeyRound width={"20px"} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="******"
              name="Password"
              id="Password"
            />
            {showPassword ? (
              <EyeOff width={"20px"} onClick={toggleShowPass} className="eye_Icon" />
            ) : (
              <Eye width={"20px"} onClick={toggleShowPass} className="eye_Icon" />
            )}
          </div>

          <button type="submit">Log In</button>
          <p>
            Don't have an account?
            <NavLink to="/signup"> Create account</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
