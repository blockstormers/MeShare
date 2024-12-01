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

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
