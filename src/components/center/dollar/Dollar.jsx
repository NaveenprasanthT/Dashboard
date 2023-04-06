import React from 'react';
import './Dollar.css';

function Dollar() {

    const [ completed, bgcolor] = [75, "#190a89"]

    const containerStyles = {
        height: '15px',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        width: '170%',
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor ,
        borderRadius: 'inherit',
        textAlign: 'right'
      }
    

    return ( 
        <div className="dollarContainer">
            <div className='symbol'>$</div>
            <div className="total">
                <span>Total Revenue</span>
                <span>%92,983</span>
                <div style={containerStyles}>
                    <div style={fillerStyles}>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Dollar;