import React from 'react';
import SavourlyLandingPage from './components/SavourlyLandingPage';
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SavourlyLandingPage />
    </div>
  );
}

export default App;