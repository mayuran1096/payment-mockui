import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import MainLayout from "./Components/MainLayout";


import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from "react-router";
function App() {
  return (
    <div className="App">
      <Router><MainLayout/></Router>
    </div>
  );
}

export default App;
