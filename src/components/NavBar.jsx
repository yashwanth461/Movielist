import React from "react";
import logo from "../assets/logo-2.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    toast.success("Logged Out");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
        <p className="text-2xl ml-3 font-bold text-white cursor-pointer">
          GEEKSYNERGY
        </p>
      </div>
      <ul className="navbar-links">
        <li className="hover:text-gray-700 hover:bg-white">
          <Link to="/company">Company Info</Link>
        </li>
        <li
          className="hover:text-gray-700 hover:bg-white"
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>
      <ToastContainer />
    </nav>
  );
}

export default NavBar;
