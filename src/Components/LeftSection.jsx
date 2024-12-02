import React from "react";
// import "./LeftSection.css";
import { useNavigate } from "react-router-dom";

function LeftSection() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/about"); // Navigate to the profile page
  };

  return (
    <div className="left-section">
      <h1>
        Create <br /> New Account
      </h1>
      {/* <p>Not registered? Sign up here</p> */}
      <p style={{ color: '#FFFFFF' }}>
        Welcome to <strong>DecentralSave</strong> – secure, decentralized space
        for sharing files directly with those you trust.
      </p>
      <button className="learn-more" onClick={handleNavigate}>Learn More</button>
    </div>
  );
}

export default LeftSection;

