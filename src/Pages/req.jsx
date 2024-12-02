import React, { useState } from "react";
import "./req.css";

const App = () => {
  // Mock data for incoming requests
  const [requests, setRequests] = useState([
    { id: 1, name: "John Doe", status: "pending" },
    { id: 2, name: "Jane Smith", status: "pending" },
    { id: 3, name: "Mike Johnson", status: "pending" },
  ]);

  // Handle Accept
  const handleAccept = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: "accepted" } : request
      )
    );
  };

  // Handle Deny
  const handleDeny = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: "denied" } : request
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Manage Requests</h2>
        <ul className="request-list">
          {requests.map((request) => (
            <li key={request.id} className="request-item">
              <p>
                <strong>{request.name}</strong>
              </p>
              {request.status === "pending" ? (
                <div>
                  <button
                    onClick={() => handleAccept(request.id)}
                    className="accept-btn"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleDeny(request.id)}
                    className="deny-btn"
                  >
                    Deny
                  </button>
                </div>
              ) : (
                <p>Status: <span className={`status-${request.status}`}>{request.status}</span></p>
              )}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;
