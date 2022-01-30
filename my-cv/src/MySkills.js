import React from 'react';
import SkillsPic from './SkillsPic.jpg';

import './App.css';

export default function MySkills() {
    return (
        <div className="sections">
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
        </div>
        </div>
    );
}