import React from 'react';
import AboutPic from './AboutPic.png';
import SkillsPic from './SkillsPic.jpg';
import Modelling from './Modelling.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faChild } from '@fortawesome/free-solid-svg-icons';


import './CvSections.css';

export default function CvSections(){
    return (
        <div className="sections">
<div className="container" id="homepage-sections">
      <div className="row abstract">
        <div className="col-6 mt-5 mb-5 img-about-me">
        <img src={AboutPic} className="About-picture" alt="img" />
        </div>
        <div className="col-6 mt-4 introducing-myself">
          <h2 className="aboutTitle mt-5">About me</h2>
          <p className="text-myself">
          Very good command of many digital IT platforms and excellent customer score satisfaction. My key career achievements to date have included English, Spanish language levels certifications; - Bulgarian and French no certificate only basic skills - and hygienic security on work places qualifications. I want to include here even my Bachelor and Master Degree of five years in Architecture at the University of Florence, in Italy. I have strong written and spoken English language skills gained through high and university scholar course plus extra scholar courses and direct experience in England for one month as well as mother-tongue competency in Italian. 
          </p>
          <button type="button" class="btn button-learnMore">
            <a className="contacts-pages-link" target="_blank" href="aboutme">Learn more</a>
          </button>
        </div>
        <div className="col-6 mt-5 img-my-projects">
        <img src={SkillsPic} className="Skills-picture" alt="img" />
        </div>
        <div
          className="col-6  mt-5 introducing-projects"
        >
          <h2 className="projectsTitle mt-5">My Skills and Abilities</h2>
          <p className="text-skills">
          Self-motivation, Creativity, Fast learner, Critical thinking, Multitasking and Problem solving.
          Ability to work under pressure and in multi-language teams.
          IT Skills: basic Python programming language, VPN and Network resolution problems. 
          </p>
          <button type="button" className="btn success button-learnMore">
          <a className="contacts-pages-link" target="_blank" href="/myskills">Learn more</a>
          </button>
        </div>
        <div className="col-6 mt-5 img-my-projects">
        <img src={Modelling} className="Modelling-picture" alt="img" />
        </div>
        <div
          className="col-6 mt-5 introducing-projects"
        >
          <h2 className="portfolioTitle mt-5"> My Architectural Design Portfolio </h2>
          <p className="text-portfolio">
          </p>
          <button type="button" className="btn success button-learnMore">
            <a className="contacts-pages-link" href="https://www.flipsnack.com/vanni88/vanni_francini_portfolio.html" target="_target"> See my Architectural Design Portfolio</a>
          </button>
        </div>
        </div>
        <br />
        <br />
        <div className="contacts-container">
       <h3>Contact me 📲 </h3>
       <br />
      <br />
       <div className="row contacts">
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