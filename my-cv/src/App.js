import React from 'react';
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import ContactMe from "./ContactMe";
import {Route, Routes} from 'react-router-dom';


import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>   
    </div>
    
  );
}

export default App;
