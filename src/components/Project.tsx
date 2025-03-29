import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/9264YD/it-support-system" target="_blank" rel="noreferrer"><img src={project1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/9264YD/it-support-system" target="_blank" rel="noreferrer"><h2>IT Support Management System</h2></a>
                <p>The IT Support Management System is a robust web application developed to efficiently handle and allocate support tickets to technicians. The system is built using Java and TypeScript.</p>
            </div>
            <div className="project">
                <a href="https://github.com/9264YD/AI-Chart-Agent" target="_blank" rel="noreferrer"><img src={project2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/9264YD/AI-Chart-Agent" target="_blank" rel="noreferrer"><h2>AI Chart Agent</h2></a>
                <p>AI Chart Agent is developed using TypeScript and Python, where users can generate visual charts based on chosen topics and data.</p>
            </div>
            <div className="project">
                <a href="https://github.com/9264YD/Real-Estate" target="_blank" rel="noreferrer"><img src={project3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/9264YD/Real-Estate" target="_blank" rel="noreferrer"><h2>Real Estate Website</h2></a>
                <p>This real estate website enables users to browse, search, and filter property listings, view detailed information, and chat with agents. It is built using the MERN stack.</p>
            </div>
            <div className="project">
                <a href="https://github.com/9264YD/tech-mart" target="_blank" rel="noreferrer"><img src={project4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/9264YD/tech-mart" target="_blank" rel="noreferrer"><h2>Tech Mart</h2></a>
                <p>This is an e-commerce platform for selling electronic products, built using Next.js, Sanity, and Stripe.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;