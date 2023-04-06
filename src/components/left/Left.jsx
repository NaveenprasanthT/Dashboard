import React from 'react'
import './Left.css'
import About from './about/about';
import Pro from './pro/Pro';
import Menu from './menu/Menu';

function Left() {
    return ( 
        <div className="leftContainer">
            <div className="leftTop">
               <About/> 
            </div>
            <div className="leftCenter">
                <Menu/>
            </div>
            <div className="leftBottom">
                <Pro/>
            </div>
        </div>
     );
}

export default Left