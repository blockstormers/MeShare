import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook

const Home = () => {
  const navigate = useNavigate(); // Create a navigation function

  const handleLoginClick = () => {
    navigate("/profile"); // Navigate to the login page
  };

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <button onClick={handleLoginClick}>Go to Login</button>
    </div>
  );
};

export default Home;
