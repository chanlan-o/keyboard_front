import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import './output.css';
import Login from './Login';
import Signup from './Signup';
import KeyboardDetail from './KeyboardDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/keyboard/:id" element={<KeyboardDetail />} /> 
      </Routes>
    </Router>
  );
}

export default App;
