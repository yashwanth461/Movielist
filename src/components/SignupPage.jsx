import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/SignupPage.css";

const initialState = {
  name: "",
  password: "",
  email: "",
  phoneNumber: "",
  profession: "",
};

function SignupPage() {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isUserAlreadyExists = () => {
    const existingUsers = JSON.parse(localStorage.getItem("userData")) || [];
    return existingUsers.some(
      (user) =>
        user.name.toLowerCase() === formData.name.toLowerCase() &&
        user.password === formData.password &&
        user.email === formData.email &&
        user.phoneNumber === formData.phoneNumber &&
        user.profession === formData.profession
    );
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (formData.name.trim() === "") {
      toast.error("Name is a required field");
    }
    if (formData.password.trim() === "") {
      toast.error("Password is a required field");
    }
    if (formData.email.trim() === "") {
      toast.error("Email is a required field");
    }
    if (formData.phoneNumber.trim() === "") {
      toast.error("Phone Number is a required field");
    }
    if (formData.profession.trim() === "") {
      toast.error("Profession is a required field");
    } else if (isUserAlreadyExists()) {
      toast.error("User already exists. Please login");
      navigate("/login");
    } else {
      const existingUsers = JSON.parse(localStorage.getItem("userData")) || [];
      const updatedUsers = [...existingUsers, formData];

      localStorage.setItem("userData", JSON.stringify(updatedUsers));
      toast.success("Registration Successful");
      setFormData(initialState);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
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
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profession">Profession</label>
          <select
            name="profession"
            value={formData.profession}
            onChange={handleInputChange}
          >
            <option value="">---- Select ----</option>
            <option value="software_developer">Software Developer</option>
            <option value="system_administrator">System Administrator</option>
            <option value="network_engineer">Network Engineer</option>
            <option value="data_analyst">Data Analyst</option>
            <option value="it_security_specialist">
              IT Security Specialist
            </option>
            <option value="ux_ui_designer">UX/UI Designer</option>
            <option value="project_manager">Project Manager</option>
            <option value="qa_tester">QA Tester</option>
            <option value="devops_engineer">DevOps Engineer</option>
            <option value="business_analyst">Business Analyst</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </div>
      </form>
      <p className="login-text">
        Already have an account?{" "}
        <span className="login-link" onClick={() => navigate("/login")}>
          Login
        </span>
      </p>
      <ToastContainer />
    </div>
  );
}

export default SignupPage;
