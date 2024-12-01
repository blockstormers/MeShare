import React from "react";
// import FileList from "./fileList";
import FileList from "./FileList";

const FileTabs = ({ activeTab, setActiveTab, files }) => {
  return (
    <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
      {/* Tab Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "shared" ? "bg-orange-400" : "bg-gray-600"
          }`}
          onClick={() => setActiveTab("shared")}
        >
          Shared
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "received" ? "bg-orange-400" : "bg-gray-600"
          }`}
          onClick={() => setActiveTab("received")}
        >
          Received
        </button>
      </div>

      {/* File List */}
      <FileList files={files} />
    </div>
  );
};

export default FileTabs;
