// import React, { useState } from "react";
// import { ethers } from "ethers";
// import axios from "axios";

// // Initialize IndexedDB (same as your previous code)

// // Your contract's ABI and address
// const contractABI = [
//   // ABI definition of your contract (simplified for illustration)
//   {
//     "inputs": [
//       { "internalType": "string", "name": "ipfsHash", "type": "string" },
//       { "internalType": "string", "name": "fileName", "type": "string" }
//     ],
//     "name": "uploadFile",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   // Add other contract functions here as needed
// ];

// const contractAddress = "0x1dF62f291b2E969fB0849d99D9Ce41e2F137006e"; // Replace with your contract address

// // Function to upload the file to IPFS
// async function uploadFileToIPFS(file) {
//   const PINATA_API_KEY = "859feab183dc66b5f8f8"; // Replace with your Pinata API key
//   const PINATA_SECRET_KEY = "7de4175e43326265c3a144db48ee928b59529d834506078b1ddeec58f03af3f0"; // Replace with your Pinata secret key

//   const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

//   const form = new FormData();
//   form.append("file", file);

//   const headers = {
//     "pinata_api_key": PINATA_API_KEY,
//     "pinata_secret_api_key": PINATA_SECRET_KEY,
//   };

//   try {
//     const response = await axios.post(url, form, { headers });
//     const ipfsHash = response.data.IpfsHash;
//     console.log("File uploaded to IPFS. Hash:", ipfsHash);
//     return ipfsHash;
//   } catch (error) {
//     console.error("Error uploading file to IPFS:", error);
//     throw error;
//   }
// }

// export default function FileUpload() {
//   const [file, setFile] = useState(null);
//   const [permissions, setPermissions] = useState([
//     { userAddress: "0x1234567890abcdef", permissions: "view", grantedAt: new Date().toISOString() },
//   ]);
//   const [fileURL, setFileURL] = useState("");

//   // Handle file input change
//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   // Handle file upload and store metadata
//   const handleFileUpload = async () => {
//     if (file) {
//       try {
//         // Upload the file to IPFS
//         const ipfsHash = await uploadFileToIPFS(file);
//         const ipfsURL = `https://ipfs.infura.io/ipfs/${ipfsHash}`;

//         // Store file metadata in the blockchain (call the smart contract)
//         await storeFileOnBlockchain(ipfsHash, file.name);

//         // Store file metadata in IndexedDB
//         storeFileMetadata(ipfsHash, file.name, ipfsURL, permissions);

//         // Set the file URL to display the uploaded file
//         setFileURL(ipfsURL);
//         console.log("File uploaded and metadata stored successfully!");
//       } catch (error) {
//         console.error("Error during file upload:", error);
//       }
//     }
//   };

//   // Function to interact with the blockchain and store file metadata
//   async function storeFileOnBlockchain(ipfsHash, fileName) {
//     if (!window.ethereum) {
//       console.error("Ethereum wallet is not installed");
//       return;
//     }

//     const provider = new ethers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const contract = new ethers.Contract(contractAddress, contractABI, signer);

//     try {
//       const tx = await contract.uploadFile(ipfsHash, fileName);
//       await tx.wait(); // Wait for the transaction to be mined
//       console.log("File metadata stored on the blockchain.");
//     } catch (error) {
//       console.error("Error storing file metadata on blockchain:", error);
//     }
//   }

//   return (
//     <div>
//       <h1>Upload a File to IPFS and Blockchain</h1>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleFileUpload}>Upload File</button>

//       {fileURL && (
//         <div>
//           <h2>File Display:</h2>
//           <img src={fileURL} alt="Uploaded File" style={{ maxWidth: "100%", height: "auto" }} />
//         </div>
//       )}
//     </div>
//   );
// }




import React, { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

// Your contract's ABI and address
const contractABI = [
  {
    "inputs": [
      { "internalType": "string", "name": "ipfsHash", "type": "string" },
      { "internalType": "string", "name": "fileName", "type": "string" }
    ],
    "name": "uploadFile",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  // Add other contract functions here as needed
];

const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your contract address

// Function to upload the file to IPFS
async function uploadFileToIPFS(file) {
  const PINATA_API_KEY = "YOUR_PINATA_API_KEY"; // Replace with your Pinata API key
  const PINATA_SECRET_KEY = "YOUR_PINATA_SECRET_KEY"; // Replace with your Pinata secret key

  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  const form = new FormData();
  form.append("file", file);

  const headers = {
    "pinata_api_key": PINATA_API_KEY,
    "pinata_secret_api_key": PINATA_SECRET_KEY,
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

// Store file metadata into IndexedDB
function storeFileMetadata(ipfsHash, fileName, fileURL, permissions) {
  const request = indexedDB.open("FileDatabase", 1);
  let db;

  request.onupgradeneeded = function (event) {
    db = event.target.result;
    const objectStore = db.createObjectStore("files", { keyPath: "ipfsHash" });
    objectStore.createIndex("fileName", "fileName", { unique: false });
    objectStore.createIndex("permissions", "permissions", { unique: false });
  };

  request.onsuccess = function (event) {
    db = event.target.result;
    const transaction = db.transaction(["files"], "readwrite");
    const objectStore = transaction.objectStore("files");

    const metadata = {
      ipfsHash,
      fileName,
      fileURL,
      permissions,
      accessTimestamp: new Date().toISOString(),
    };

    const storeRequest = objectStore.add(metadata);
    storeRequest.onsuccess = () => console.log("Metadata stored in IndexedDB");
    storeRequest.onerror = (err) => console.error("Error storing metadata:", err);
  };

  request.onerror = function (event) {
    console.error("Error opening IndexedDB:", event.target.error);
  };
}

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [permissions, setPermissions] = useState([
    { userAddress: "0x1234567890abcdef", permissions: "view", grantedAt: new Date().toISOString() },
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

        // Store file metadata in the blockchain (call the smart contract)
        await storeFileOnBlockchain(ipfsHash, file.name);

        // Store file metadata in IndexedDB
        storeFileMetadata(ipfsHash, file.name, ipfsURL, permissions);

        // Set the file URL to display the uploaded file
        setFileURL(ipfsURL);
        console.log("File uploaded and metadata stored successfully!");
      } catch (error) {
        console.error("Error during file upload:", error);
      }
    }
  };

  // Function to interact with the blockchain and store file metadata
  async function storeFileOnBlockchain(ipfsHash, fileName) {
    if (!window.ethereum) {
      console.error("Ethereum wallet is not installed");
      return;
    }

    try {
      // Request user account access
      const provider = new ethers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      // Call the uploadFile function on the smart contract
      const tx = await contract.uploadFile(ipfsHash, fileName);
      console.log("Transaction sent:", tx);

      // Wait for the transaction to be mined
      await tx.wait();
      console.log("File metadata stored on the blockchain.");
    } catch (error) {
      console.error("Error storing file metadata on blockchain:", error);
    }
  }

  return (
    <div>
      <h1>Upload a File to IPFS and Blockchain</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>

      {fileURL && (
        <div>
          <h2>File Display:</h2>
          <img src={fileURL} alt="Uploaded File" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      )}
    </div>
  );
}
