import React from 'react'
import './client.css'
import img1 from '../../../assests/pic.png'
import {AiOutlineDown} from 'react-icons/ai';

function Client() {
    return ( 
        <div className='clientContainer'>
            <img src={img1} alt="" />
            <div className="content">
                <div className="contenttop">
                    <span>Dear Client</span>
                    <span><AiOutlineDown/></span>
                </div>
                <p>Join our online commuunity.
                    It helps <br/>In managing your projects
                </p>
            </div>
        </div>
     );
}

export default Client;