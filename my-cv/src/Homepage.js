import React from 'react';
import CvSections from "./CvSections";
import CvNavBar from "./CvNavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

export default function Homepage() {
    return (
      <div>
      <CvNavBar />
        <div className="Homepage-section">
        <header className="Homepage-header">
          <div className="title-container">
          <h1>
            Vanni Francini
          </h1>
          </div>
        </header>
        <div className="containerTwo">
          <CvSections />
        </div>
          <br />
          <br />

        <footer className="Homepage-footer">
          <p>
            Coded by <a className="github-link" href="https://github.com/biancafrancini" target="_blank" rel="noreferrer"> Bianca Francini </a>
            </p>
        </footer>
      </div>
      </div>
    );
}
