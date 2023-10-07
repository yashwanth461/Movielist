import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css"; // Import the CSS file

function LoginPage() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("userData")) || [];
    const user = users.find(
      (u) => u.name === formData.name && u.password === formData.password
    );

    if (user) {
      toast.success("Logged in Successfully");
      setTimeout(() => {
        navigate("/movies");
      }, 1000);
    } else {
      toast.error("Invalid Credentials");
    }
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input
              name="name"
              type="text"
              placeholder="Username"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
        <p className="login-text">
          Don't have an account?{" "}
          <span className="login-link" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
}

export default LoginPage;
