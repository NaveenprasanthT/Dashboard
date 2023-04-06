import React from 'react';
import './Right.css';
import Client from './client/client';
import Transaction from './transaction/transaction';
import Projects from './projects/project';

function Right() {
    return ( 
        <div className='rightContainer'>
            <div className="righttop">
                <Client/>
            </div>
            <div className="rightcenter">
                <Transaction/>
            </div>
            <div className="rightleft">
                <Projects/>
            </div>
        </div> 
    );
}

export default Right;