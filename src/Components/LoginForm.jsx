import React from "react";
// import "./App.css";

function LoginForm() {
  return (
    <div className="right-section">
      <h2>Login</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

