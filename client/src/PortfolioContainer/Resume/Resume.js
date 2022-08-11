import React, {useState} from 'react'
import ScreenHeading from '../../utilitis/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilitis/ScrollService'
import Animations from '../../utilitis/Animations'
import './Resume.css'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle ] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id)
      };
      const fadeInSubscription = ScrollService.CurrentScreenFadeIn.subscribe(fadeInScreenHandler); 

    const ResumeHeading = (props) => {
        return (
        <div className="resume-heading">
            <div className="resume-main-heading">
                <div className="heading-bullet"></div>
                   <span>{props.heading ? props.heading : ""}</span> 
                   {props.fromDate && props.toDate ? ( 
                   <div className="heading-date">
                        {props.fromDate + "-" + props.toDate}

                   </div> ) : (<div></div>)}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.SubHeading ? props.SubHeading: ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
                </div>
            //</div>
        )
    }

    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"},
    ];

    const programmingSkillsDetails = [
        {skill: "HTML", ratingPercentage: 95},
        {skill: "CSS", ratingPercentage: 85},
        {skill: "BootStrap", ratingPercentage: 95},
        {skill: "JavaScript", ratingPercentage: 85},
        {skill: "Node JS", ratingPercentage: 85},
        {skill: "React JS", ratingPercentage: 80},
        {skill: "Express JS", ratingPercentage: 90},
        {skill: "Mongo DB", ratingPercentage: 75},
        {skill: "Java", ratingPercentage: 90},
        
    ];

    const projectsDetails = [
        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "2022", toDate: "2022"},
            description: "This is a personal Portfolio website to showcase all my details and projects at one place.",
            SubHeading: "Technologies Used: React JS, Bootsrap"
        },
        {
            title: "Voice Activated Object Tracking Quadcopter",
            duration: {fromDate: "2021", toDate: "2022"},
            description: "A versatile Voice Activated Object Tracking Quadcopter, or VAOTQ, allows you to travel in the backseat without the inconvenience of carrying a camera by putting the camera on autopilot. I equipped my drone or quadcopter with ultrasonic sensors to prevent any collisions.",
            SubHeading: "Technologies Used: Python, deepsort, opencv, tensorflow, yoloV4, flask, React Js"
        },
        {
            title: "Ecommerce Store",
            duration: {fromDate: "2021", toDate: "2022"},
            description: "Online ecommerce website for showcasing and selling products onlne with payment system integration, Basically a clone of amazon store.",
            SubHeading: "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap."
        },
    ]

    const resumeDetails = [
        <div className='resume-screen-container' key = "education">
            <ResumeHeading 
            heading = {"Bahria University Islamabad Campus"}
            SubHeading = {"Bachelor of Computer Science"}
            fromDate = {"2018"}
            toDate = {"2022"}            
            />
            <ResumeHeading 
            heading = {"FG Sir Syed College, The Mall"}
            SubHeading = {"Pre Engineering"}
            fromDate = {"2015"}
            toDate = {"2017"}            
            />
            <ResumeHeading 
            heading = {"Saint Mary's Cambridge School"}
            SubHeading = {"Matriculation"}
            fromDate = {"2013"}
            toDate = {"2015"}            
            />
        </div>,
        <div className="resume-screen-container" key = "work-experience">
            <ResumeHeading 
            heading = {"Brand Fellas"}
            SubHeading = {"Project Base"}
            fromDate = {"2021"}
            toDate = {"2021"}            
            />
            <div className="experience-description">
                <span className="resume-description-text">
                Worked as a React Developer for a single project.
                </span>
            </div>
            <div className="experience-description">
                <span className="resume-description-text">
                -They hired me to make a single page interactive portfolio for their brand.
                </span>
                <br/>
                <span className="resume-description-text">
                -I stretch my mental capacity to develope UI as per the given designs.
                </span>
            </div>
            </div>,
            <div className="resume-screen-container programming-skills-container"
            key = "programming-skills">
                {programmingSkillsDetails.map((skill, index) => (
                    <div className="skill-parent" key = {index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div style={{width: skill.ratingPercentage + '%'}} className="active-percentage-bar">
                    </div>
                    </div>
                    </div>
                ))}

            </div>,
            <div className="resume-screen-container" key = "projects">
                {projectsDetails.map((projectsDetails, index) => (
                    <ResumeHeading 
                    key = {index}
                    heading = {projectsDetails.title}
                    SubHeading = {projectsDetails.SubHeading}
                    description = {projectsDetails.description}
                    fromDate = {projectsDetails.duration.fromDate}
                    toDate = {projectsDetails.duration.toDate}
                    />
                ))}
            </div>,
            <div className="resume-screen-container" key = "interests">
                    <ResumeHeading 
                    heading = "Teaching"
                    description = "Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
                    />
                    <ResumeHeading 
                    heading = "Music"
                    description = "Listening to soothing music is something I can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that I can get my hands on."
                    />
                    <ResumeHeading 
                    heading = "Football" 
                    description = "I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
                    />
            </div>,
            
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };
    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div 
            onClick = {() => handleCarousal(index)}
            className = {index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            key = {index}
            >
                <img className="bullet-logo" 
                src = {require(`../../assets/Resume/${bullet.logoSrc}`)}
                alt = 'no internet connection'/>
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ))
    }

    const getResumeScreen = () => {
        return(
            <div className="resume-details-carousal"
            style = {carousalOffSetStyle.style}>
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}   
            </div>

        )
    }


  return (
    <div className="resume-container screen-container"
     id={props.id || ""}>
        <div className="resume-content">
            <ScreenHeading title={'Resume'} SubHeading={'My Formal Bio Details.'}/>
            <div className="resume-card">
                <div className="resume-bullets">
                    <div className="bullet-container">
                        <div className="bullet-icons"></div>
                        <div className="bullets">
                            {getBullets()}
                        </div>
                    </div>
                    </div>
                    <div className="resume-bullet-details">
                        {getResumeScreen()}
                    </div>
                
            </div>
        </div>
      
    </div>
  )
}
