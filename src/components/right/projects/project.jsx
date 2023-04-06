import React from 'react';
import './project.css';
import {BsThreeDotsVertical} from 'react-icons/bs';
import{ CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Projects() {

    const [ completed, bgcolor] = [75, "#190a89"]
    const percentage = 75;


    const containerStyles = {
        height: '15px',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        width: '100%',
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor ,
        borderRadius: 'inherit',
        textAlign: 'right'
      }

    return (
        <div className="projectMain">
            <div className="projectContainer">
                <div className="projectHeader">
                    <span>Project Details</span>
                    <span><BsThreeDotsVertical/></span>
                </div>
                <span>Hira R.</span>
                <span>UX/UI Designer</span>
                <span>Projects Progress</span>
                <div style={containerStyles}>
                    <div style={fillerStyles}>
                    </div>
                </div>
            </div>
            <div className="projectContainer">
                <div className="projectHeader">
                    <span>Project Progress</span>
                    <span><BsThreeDotsVertical/></span>
                </div>
                    <CircularProgressbar
                    percentage={percentage}
                    text={`${percentage}%`}
                    className='circular'
                    />
                <p>3 remaining projects</p>
            </div>
        </div>
     );
}

export default Projects;