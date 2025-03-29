import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import photo from "../assets/images/photo.jpg";

function Main() {

  return (
    <div className="container">
      <div className="main-section">
        <div className="image-wrapper">
          <img src={photo} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/9264YD" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <h1>Yolanda Yang</h1>
          <p>Full Stack Developer | Digital Marketing Enthusiast</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/9264YD" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;