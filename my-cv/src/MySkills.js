import React from 'react';
import SkillsPic from './SkillsPic.jpg';
import CvNavBar from "./CvNavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faChild } from '@fortawesome/free-solid-svg-icons';

import './App.css';

export default function MySkills() {
    return (
        <div className="sections">
           <CvNavBar />
          <div className="title-container">
          <h1>
            What I can do...
          </h1>
          </div>
<div className="container" id="myskills-sections">
      <div className="row abstract">
        <div className="col-6 mt-5 img-my-projects">
        <img src={SkillsPic} className="Skills-picture" alt="img" />
        </div>
        <div  className="col-6  mt-5 introducing-projects">
          <h2 className="projectsTitle mt-5">My Skills and Abilities</h2>
          <p className="text-skills">
          Self-motivation, Creativity, Fast learner, Critical thinking, Multitasking and Problem solving.
          Ability to work under pressure and in multi-language teams.
          IT Skills: basic Python programming language, VPN and Network resolution problems. 
          </p>
        </div>
        </div>
        <br />
      <br />
        <div className="contacts-container">
       <h3>Contact me 📲 </h3>
       <br />
      <br />
       <div className="row contacts" id="contact-Vanni">
       <div className="col-4 mt-4 gmail-icon">
       <FontAwesomeIcon icon={faEnvelope} /> 
       <br />
       <a className="contacts-pages-link" rel="noreferrer" href="mailto:[vannifrancini@gmail.com]"> Email me</a>
        </div>
        <div className="col-4 mt-4 linkedin-icon">
        <FontAwesomeIcon icon={faUserTie} /> 
        <br />
       <a className="contacts-pages-link" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/vanni-francini-130b4349/"> My LinkedIn </a>
          </div>
          <div className="col-4 mt-4 instagram-icon">
        <FontAwesomeIcon icon={faChild} /> 
        <br />
        <a className="contacts-pages-link" rel="noreferrer" target="_blank" href="https://www.instagram.com/francini.vanni/"> My Ig </a>
          </div>
       </div>
       </div>
        </div>
        </div>
    );
}