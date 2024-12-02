import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { aut } from "./firebase"; // Import the auth object
import { auth } from "../Firebase/filebase";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const navigate = useNavigate();
    const handleNavigate = () => {
      navigate("/homepage"); // Navigate to the profile page
    };


  const [email, setEmail] = useState(""); // Store email
  const [password, setPassword] = useState(""); // Store password
  const [error, setError] = useState(""); // Store error messages

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear error on new attempt

    try {
      // Attempt to sign in with Firebase
      await signInWithEmailAndPassword(auth, email, password);
     // alert("Logged in successfully!"); // Success message
    } catch (err) {
      setError(err.message); // Capture any errors
    }
  };

  return (
    <div className="right-section">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
          required
        />

        <button type="submit" className="submit-btn" onClick={handleNavigate}>
          Submit 
        </button>

      </form>

      {/* Display error if login fails */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default LoginForm;
