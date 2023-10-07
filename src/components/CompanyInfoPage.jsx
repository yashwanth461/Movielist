import React from "react";
import NavBar from "./NavBar";
import "../components/CompanyInfoPage.css";

function CompanyInfoPage() {
  return (
    <div className="company-info-container">
      <NavBar />
      <div className="company-info-content">
        <h1 className="company-info-title">Company Info</h1>
        <div className="company-info-card">
          <p className="company-info-item">
            <span className="company-info-label">Company:</span>
            <span className="company-info-value">
              Geeksynergy Technologies Pvt Ltd
            </span>
          </p>
          <p className="company-info-item">
            <span className="company-info-label">Address:</span>
            <span className="company-info-value">
              Sanjayanagar, Bengaluru-56
            </span>
          </p>
          <p className="company-info-item">
            <span className="company-info-label">Phone:</span>
            <span className="company-info-value">XXXXXXXXX09</span>
          </p>
          <p className="company-info-item">
            <span className="company-info-label">Email:</span>
            <span className="company-info-value">
              <a href="mailto:XXXXXX@gmail.com">XXXXXX@gmail.com</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfoPage;
