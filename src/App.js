import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePages';
import logo from './logo.svg';
import './App.css';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('auth_token');
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  return(
    <Router>
      <Navbar>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/crud" element={<PrivateRoute><CRUDPage /></PrivateRoute>} />
      </Routes>
      </Navbar>
    </Router>
  );
}

export default App;