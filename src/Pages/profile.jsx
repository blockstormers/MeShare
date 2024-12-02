import { useState } from "react";
import ProfileSection from "../Components/ProfileSection";
import FileTabs from "../Components/FileTabs";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("shared"); // Default tab is "Shared"

  const files = {
    shared: [
      { id: 1, name: "Shared File 1.pdf", size: "2 MB" },
      { id: 2, name: "Shared File 2.docx", size: "1.5 MB" },
    ],
    received: [
      { id: 1, name: "Received File 1.xlsx", size: "3 MB" },
      { id: 2, name: "Received File 2.jpg", size: "4 MB" },
    ],
  };

  // Style Objects
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#e3f2fd", // Light blue background
    color: "black",
    height: "100vh", // Full screen height
  };

  const profileSectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "33.33%", // One-third of the container width
    backgroundColor: "#90caf9", // Light blue
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    gap: "15px", // Add spacing between elements
  };

  const buttonStyle = {
    display: "block", // Stack buttons vertically
    width: "100%", // Full-width buttons
    padding: "10px",
    margin: "10px 0", // Add vertical spacing
    backgroundColor: "#42a5f5", // Blue color
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s",
  };

  const fileTabsStyle = {
    flex: 1, // Take up remaining space
    backgroundColor: "#81c784", // Light green
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "20px", // Space between shared/received buttons
  };

  const tabButtonStyle = {
    ...buttonStyle,
    margin: "10px auto", // Add space between shared/received buttons
    width: "auto", // Adjust button width
  };

  return (
    <div style={containerStyle}>
      {/* Left Profile Section */}
      <div style={profileSectionStyle}>
        <ProfileSection />
        <button style={buttonStyle}>Edit Profile</button>
        <button style={buttonStyle}>Settings</button>
      </div>

      {/* Central File Tabs Section */}
      <div style={fileTabsStyle}>
        <FileTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          files={files[activeTab]}
        />
        <div>
          <button
            style={{
              ...tabButtonStyle,
              backgroundColor: activeTab === "shared" ? "#1565c0" : "#42a5f5", // Highlight active tab
            }}
            onClick={() => setActiveTab("shared")}
          >
            Shared
          </button>
          <button
            style={{
              ...tabButtonStyle,
              backgroundColor: activeTab === "received" ? "#1565c0" : "#42a5f5", // Highlight active tab
            }}
            onClick={() => setActiveTab("received")}
          >
            Received
          </button>
        </div>
      </div>
    </div>
  );
}
