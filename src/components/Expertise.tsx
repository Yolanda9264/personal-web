import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faDigitalOcean } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "PHP",
    "Springboot",
    "SASS",
    "Flask",
    "Python",
    "Restful API",
    "SQL",
    "PostgreSQL",
    "Postman",
    "AWS",
    "Azure"
];

const labelsSecond = [
    "SEO",
    "PPC",
    "Content Marketing",
    "CRM",
    "SMM",
    "Google Analytics",
    "Zapier",
    "HubSpot",
    "Shopify",
    "WooCommerce",
];

const labelsThird = [
    "OpenAI",
    "Claude",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>I have built a diverse array of applications from scratch using modern technologies such as React and Node.js. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDigitalOcean} size="3x"/>
                    <h3>Digital Marketing</h3>
                    <p>I provide SEO optimisation, content marketing, social media strategy, and analytics to enhance brand visibility and conversions. By leveraging AI-driven insights and automation tools, I help businesses achieve higher ROI.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;