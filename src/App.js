import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login'
import Survey from './pages/survey'
import Navbar from './components/navbar'
import './App.css';

function App() {
  return (
    <div class = "app-main">
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
    </div>
  );

}

export default App;