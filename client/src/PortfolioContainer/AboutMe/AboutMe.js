import React, {useEffect} from 'react';
import ScreenHeading from '../../utilitis/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilitis/ScrollService';
import Animations from '../../utilitis/Animations'; 
import './AboutMe.css';
//import '../../index.css';

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    console.log("FadeInScreen", screen.fadeInScreen)
    console.log("props.id", props.id)

    if (screen.fadeInScreen !== props.id) 
    return
    Animations.animations.fadeInScreen(props.id)
  };
  const fadeInSubscription = ScrollService.CurrentScreenFadeIn.subscribe(fadeInScreenHandler); 
  const SCREEN_CONSTANTS = {
    description: "Full stack web developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Hardworking and willing to be an asset for an organization.",
  highlights: {
    bullets: [
            'Full Stack web developer',
            'Interactive Front End as per the design',
            'React',
            'Redux for State Mnanagement',
            'Building REST API',
            'Node.js', 
    ],
    heading: "Here are a Few Highlights:"
  }
 

  }
  const renderHighlights = () =>{
    return (
      SCREEN_CONSTANTS.highlights.bullets.map((bullet, i) => (
        <div  className="highlight" key={i}>
          <div className="highlight-blob"></div>
            <span>{bullet}</span>
          </div>
        
    )))
  
  }
  return (
    <div className="about-me-container screen-container"
     id={props.id || ""} >
      <div className="about-me-parent">
        <ScreenHeading title={'About Me'} SubHeading={'Why Choose Me'}/>
        <div className="about-me-card">
          <div className="about-me-profile"></div>
            <div className = "about-me-details">
              <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
              <div className="about-me-highlights">
                <div className="highlight-heading">
                  <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                </div>
                {renderHighlights()}
              </div>
              <div className = "about-me-options">
              <button className="btn primary-btn" 
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >Hire Me</button>
                <a href="HassanCV.pdf" download = "Hassan's CV.pdf">
                  <button className="btn highlighted-btn">Download Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  
  )
}
