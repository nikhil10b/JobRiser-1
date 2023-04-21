import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from '../components/header/Header';
import Homepage from "../pages/home/Home"
import Login from "../pages/login/Login"

function routes() {
  return (
    <Router>
    <Header/>  
      
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      </Router>
  )
}

export default routes
