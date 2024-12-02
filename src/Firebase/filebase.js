// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import for Firebase Authentication

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFqN2gerYdka2Wwng4_R7tTYjc19jT5_w",
  authDomain: "meshare-af328.firebaseapp.com",
  projectId: "meshare-af328",
  storageBucket: "meshare-af328.appspot.com",
  messagingSenderId: "198037392784",
  appId: "1:198037392784:web:fd29a929ef1f4ae597f715",
  measurementId: "G-LNBFS30SEM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app); // Export the auth object for authentication functionality