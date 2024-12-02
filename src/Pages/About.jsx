import React from 'react';
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login"); // Navigate to the profile page
  };


  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1 style={{ textAlign: 'center', color: '#4CAF50' }}>About Us</h1>
      <section style={{ marginBottom: '20px' }}>
        <h2>Our Mission</h2>
        <p>
          Meshare is committed to revolutionizing file sharing with a decentralized, secure, and permission-based
          approach. Our goal is to empower users with privacy and control, eliminating the need for centralized servers.
        </p>
      </section>
      <section style={{ marginBottom: '20px' }}>
        <h2>Key Features</h2>
        <ul>
          <li>Decentralized peer-to-peer file sharing for enhanced security.</li>
          <li>Permission-based access ensuring privacy and control.</li>
          <li>Search and discover public files effortlessly.</li>
          <li>Streamlined file upload and management system.</li>
          <li>Real-time notifications for file access requests.</li>
        </ul>
      </section>
      <section style={{ marginBottom: '20px' }}>
        <h2>How It Works</h2>
        <p>
          Meshare utilizes WebRTC for peer-to-peer connections, ensuring secure file transfers without a centralized
          server. All files are encrypted, and access is granted only to authorized users through robust access
          management.
        </p>
      </section>
      <section style={{ textAlign: 'center' }}>
        <button
          style={{
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
          onClick={() => {
            //alert('Get started with Meshare now!');
            handleNavigate();
          }}
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
