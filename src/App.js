import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import MainLayout from "./Components/MainLayout";
import PaymentLoading from "./Components/Wall-slate/payment/PaymentLoading"

import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from "react-router";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path={'/'} exact component={MainLayout} />
        
        

      </Router>
    </div>
  );
}

export default App;
