import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home';
// import About from './Pages/About';
import Home from './pages/home';
import Contact from './pages/contact';
// import Contact from 'src/pages/Contact';
import About from './pages/about';
import "./App.css";
// import LeftSection from "./Components/LeftSection";
// import LoginForm from "./Components/LoginForm";
import Login from './Pages/Login';
import Profile from './Pages/profile';
import HomePage from './Pages/HomePage';
//import RequestAccessPage from "./pages/RequestAccessPage";  // If you have a page for the request route
import "./App.css";
import Req

from './Pages/req';
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/req" element={<Req/>} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;


// const App = () => {
//   const [activeTab, setActiveTab] = useState("shared"); // Default tab is "Shared"

//   const files = {
//     shared: [
//       { id: 1, name: "Shared File 1.pdf", size: "2 MB" },
//       { id: 2, name: "Shared File 2.docx", size: "1.5 MB" },
//     ],
//     received: [
//       { id: 1, name: "Received File 1.xlsx", size: "3 MB" },
//       { id: 2, name: "Received File 2.jpg", size: "4 MB" },
//     ],
//   };

//   return (
    
//   );
// };

// export default App;
