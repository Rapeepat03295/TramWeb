import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/login'
function App() {
  return (
    React.createElement(Login, null)
  );
}

export default App;
