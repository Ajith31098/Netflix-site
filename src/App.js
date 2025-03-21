import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import MainLayout from './Components/MainLayout';  // Layout component
import Register from "./Components/Login/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route element={<MainLayout />}> 
          <Route path="/" element={<Home />} />  Home page rendered inside MainLayout
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
