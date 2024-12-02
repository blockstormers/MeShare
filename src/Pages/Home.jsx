import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook

const Home = () => {
  const navigate = useNavigate(); // Create a navigation function

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="overlay"></div>
        <h1 className="home-title">Welcome to Your Next Adventure!</h1>
        <p className="home-subtitle">Discover, connect, and create with ease.</p>
        <button className="cta-button" onClick={handleLoginClick}>
          Explore Now
        </button>
      </header>
    </div>
  );
};

export default Home;