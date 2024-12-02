import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const [files, setFiles] = useState([]); // Public files
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const [filteredFiles, setFilteredFiles] = useState([]); // Filtered files for search
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [selectedFile, setSelectedFile] = useState(null); // File for modal
  const [feedbackMessage, setFeedbackMessage] = useState(""); // Feedback message

  const handleNavigate = () => {
    navigate("/profile"); // Navigate to the profile page
  };

  // Fetch files from JSON
  useEffect(() => {
    fetch("/src/data/publicFiles.json")
      .then((response) => response.json())
      .then((data) => setFiles(data))
      .catch((error) => console.error("Error fetching files:", error));
  }, []);

  // Filter files based on search query
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const result = files.filter(
      (file) =>
        file.name.toLowerCase().includes(query) ||
        file.author.toLowerCase().includes(query)
    );
    setFilteredFiles(result);
  }, [searchQuery, files]);

  const openModal = (file) => {
    setSelectedFile(file);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFile(null);
  };

  const requestAccess = () => {
    const success = Math.random() > 0.5; // Simulate success or failure
    if (success) {
      setFeedbackMessage(
        `Request sent to ${selectedFile.author} to grant access to ${selectedFile.name}.`
      );
    } else {
      setFeedbackMessage(
        `Failed to send request to ${selectedFile.author}. Please try again later.`
      );
    }
  };

  return (
    <div className="home-page">
      {/* Left Sidebar */}
      <div className="left-sidebar">
        <div onClick={handleNavigate} style={{ cursor: "pointer" }}>
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="username">Username</div>
        <div className="option">Notifications</div>
        <div className="option">Upload File</div>
      </div>

      {/* Central Content */}
      <div className="central-content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search files or authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>

        <div className="file-grid">
          {filteredFiles.map((file) => (
            <div
              key={file.id}
              className="file-card"
              onClick={() => openModal(file)}
            >
              <img src={file.preview} alt={file.name} />
              <div>{file.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedFile && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              {selectedFile.name} by {selectedFile.author}
            </div>
            <img
              src={selectedFile.preview}
              alt={selectedFile.name}
              className="modal-image"
            />
            <div className="modal-description">
              {selectedFile.description.length > 500
                ? `${selectedFile.description.substring(0, 500)}...`
                : selectedFile.description}
            </div>
            <button className="modal-button" onClick={requestAccess}>
              Request Access
            </button>
            {feedbackMessage && (
              <div className="feedback-message">{feedbackMessage}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
