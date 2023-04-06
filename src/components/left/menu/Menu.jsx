import React, { useState } from 'react';
import './Menu.css';
import { VscFileSymlinkDirectory } from 'react-icons/vsc';
import {TfiEmail} from 'react-icons/tfi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { GoGraph } from 'react-icons/go';
import { AiOutlineForm } from 'react-icons/ai'

function Menu() {

    const [clicked, setClicked] = useState("Dashboard")
    
    const options = [
        {
            icon : <VscFileSymlinkDirectory/>,
            name : "Dashboard",
        },
        {
            icon:<TfiEmail/>,
            name : "Email"
        },
        {
            icon:<AiOutlineCalendar/>,
            name : "Calender"
        },
        {
            icon:<GoGraph/>,
            name : "Graph"
        },
        {
            icon:<AiOutlineForm/>,
            name : "Forms"
        },
    ]

    return ( 
        <div className="menuContainer">
            {options.map((option)=>(
                <div className="menu" 
                    id={option.name === clicked ? "active" : ""}
                    onClick={()=>setClicked(option.name)}
                    >
                    <span>{option.icon}</span>
                    <span>{option.name}</span>
                </div>
            ))}
        </div>
     );
}

export default Menu