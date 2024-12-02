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
    backgroundColor: "#1e3a8a", // Blue-900 equivalent
    color: "white",
    height: "100vh", // Full screen height
  };

  const profileSectionStyle = {
    width: "33.33%", // One-third of the container width
    backgroundColor: "#1e40af", // Slightly darker blue
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const fileTabsStyle = {
    flex: 1, // Take up remaining space
    backgroundColor: "#1e40af", // Slightly darker blue
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={containerStyle}>
      {/* Profile Section */}
      <div style={profileSectionStyle}>
        <ProfileSection />
      </div>

      {/* File Tabs Section */}
      <div style={fileTabsStyle}>
        <FileTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          files={files[activeTab]}
        />
      </div>
    </div>
  );
}


