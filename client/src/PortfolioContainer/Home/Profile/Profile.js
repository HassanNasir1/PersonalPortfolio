import React from 'react'
import Typical from "react-typical"
import ScrollService from '../../../utilitis/ScrollService'
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
            <div className="colz">
                <div className="colz-icon">
                <a href="https://www.facebook.com/profile.php?id=100042611640358" >
                    <i className="fa fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com/hanny.mughal1/" >
                    <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCFC1Jin1TfbgWFtbSuuEGrw" >
                    <i className="fa fa-youtube-square"></i>
                </a>
                <a href="https://twitter.com/HassanMughalx" >
                    <i className="fa fa-twitter-square"></i>
                </a>
                <a href="https://github.com/HassanNasir1" >
                    <i className="fa fa-github-square"></i>
                </a>
            </div>
            </div>
            <div className="profile-details-name">
                {" "}
                <span className="primary-text">Hello, I'M <span className="highlighted-text">HASSAN NASIR</span>
                </span>
            </div>
            <div className="profile-details-role">
                <span className="primary-text">
                    {" "}
                    <h1>
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Ethusiastic Web Developer 🖥",   
                            1000,
                            "Full Stack Developer ⌨",
                            1000,
                            "Software Engineer 🔁",  
                            1000,
                            "REACT Developer 🔗",    
                            1000, 
                            "Problem Solver 🧰",
                            1000,
                            "MERN Stack Developer 🤖",
                            1000,
                        ]}
                        />
                    </h1>
                    <span className="profile-role-tagline">Ability to create applications that combine frontend and backend 
                    functionality.
                    </span>
                </span>
            </div>
            <div className="profile-options">
                <button className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                >Hire Me</button>
                
                <a href="HassanCV.pdf" download = "Hassan's CV.pdf">
                        <button className="btn highlighted-btn">Download Resume</button>
                </a>
            </div>
        </div>
        <div className="profile-picture">
           <div className="profile-picture-background"></div> 
        </div>
      </div>
    </div>
  )
}
