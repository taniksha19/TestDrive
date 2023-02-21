import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import {Registration}  from "./pages/Registration";
import {Login} from "./pages/Login";
import {Home}  from "./pages/Home";
import {Pending}  from "./pages/Pending";
import {Administrate}  from "./pages/Administrate";
import {Legacy}  from "./pages/Legacy";
import {TrackTestDrive}  from "./pages/TrackTestDrive";
 

function App() {

  return (
    <Router>
      <Routes>
        <Route path = "/"  element = {<Login/>} />;
        <Route path = "/registration"  element = {<Registration/>} />;
        <Route path = "/home"  element = {<Home/>} />;
        <Route path = "/pending"  element = {<Pending/>} />;
        <Route path = "/legacy"  element = {<Legacy/>} />;
        <Route path = "/administration"  element = {<Administrate/>} />;
        <Route path = "/track"  element = {<TrackTestDrive/>} />;
      </Routes>
    </Router>
  );
}



export default App;
