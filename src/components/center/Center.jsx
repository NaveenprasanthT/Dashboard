import React from 'react';
import './Center.css'
import Dollar from './dollar/Dollar';
import Travel from './travel/Travel.jsx';
import Slot from './slots/Slot';

function Center() {
    return ( 
        <div className="centerContainer">
            <div className="centertop">
                <Dollar/>
            </div>
            <div className="centermiddle">
                <Travel/>
            </div>
            <div className="centerbottom">
                <Slot/>
            </div>
        </div>
     );
}

export default Center;