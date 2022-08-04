import React from "react";
import './App.css';
import { Route, Routes} from "react-router-dom";
import {Home, College, VirtualView} from './components';

function App() {

  return (
    <div className="app">
    <Routes>
      <Route exact path="/" element={<Home/>} /> 
      <Route exact path="/college/:college_id" element={<College/>} /> 
      <Route exact path="/vr/:college_id" element={<VirtualView/>} /> 
    </Routes>
    </div>
  );
}

export default App;
