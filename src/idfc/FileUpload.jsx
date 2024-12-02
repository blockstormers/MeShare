import React, { useState, useEffect } from "react";
import axios from "axios";
import FormData from "form-data";

// Initialize IndexedDB
let db;
const request = indexedDB.open("FileDatabase", 1);

// On upgrade needed (initial setup or schema change)
request.onupgradeneeded = function (event) {
  db = event.target.result;
  const objectStore = db.createObjectStore("files", { keyPath: "ipfsHash" });
  objectStore.createIndex("fileName", "fileName", { unique: false });
  objectStore.createIndex("permissions", "permissions", { unique: false });
};

// On success (db opened)
request.onsuccess = function (event) {
  db = event.target.result;
  console.log("Database opened successfully");
};

// On error
request.onerror = function (event) {
  console.error("Error opening database:", event.target.error);
};

// Store file metadata into IndexedDB
function storeFileMetadata(ipfsHash, fileName, fileURL, permissions) {
  const transaction = db.transaction(["files"], "readwrite");
  const objectStore = transaction.objectStore("files");
  const metadata = {
    ipfsHash: ipfsHash,
    fileName: fileName,
    fileURL: fileURL, // Store the File URL from IPFS Gateway
    permissions: permissions,
    accessTimestamp: new Date().toISOString(),
  };

  const request = objectStore.add(metadata);

  request.onsuccess = function (event) {
    console.log("File metadata stored successfully", event.target.result);
  };

  request.onerror = function (event) {
    console.error("Error storing metadata:", event.target.error);
  };
}

// Function to upload a file to IPFS using Pinata API
async function uploadFileToIPFS(file) {
  const PINATA_API_KEY = "your_pinata_api_key"; // Replace with your Pinata API key
  const PINATA_SECRET_KEY = "your_pinata_secret_key"; // Replace with your Pinata secret key

  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  const form = new FormData();
  form.append("file", file);

  const headers = {
    pinata_api_key: PINATA_API_KEY,
    pinata_secret_api_key: PINATA_SECRET_KEY,
    ...form.getHeaders(),
  };

  try {
    const response = await axios.post(url, form, { headers });
    const ipfsHash = response.data.IpfsHash;
    console.log("File uploaded to IPFS. Hash:", ipfsHash);
    return ipfsHash;
  } catch (error) {
    console.error("Error uploading file to IPFS:", error);
    throw error;
  }
}

// Component to handle file uploads and manage IndexedDB storage
export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [permissions, setPermissions] = useState([
    {
      userAddress: "0x1234567890abcdef",
      permissions: "view",
      grantedAt: new Date().toISOString(),
    },
  ]);
  const [fileURL, setFileURL] = useState("");

  // Handle file input change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle file upload and store metadata
  const handleFileUpload = async () => {
    if (file) {
      try {
        // Upload the file to IPFS
        const ipfsHash = await uploadFileToIPFS(file);
        const ipfsURL = `https://ipfs.infura.io/ipfs/${ipfsHash}`;

        // Store the file metadata (IPFS hash, file URL, permissions) in IndexedDB
        storeFileMetadata(ipfsHash, file.name, ipfsURL, permissions);

        // Set the file URL to display the uploaded file
        setFileURL(ipfsURL);
        console.log("File uploaded and metadata stored successfully!");
      } catch (error) {
        console.error("Error during file upload:", error);
      }
    }
  };

  return (
    <div>
      <h1>Upload a File to IPFS</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>

      {fileURL && (
        <div>
          <h2>File Display:</h2>
          <img
            src={fileURL}
            alt="Uploaded File"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
}
