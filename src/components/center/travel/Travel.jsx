import React from 'react';
import './Travel.css';
import img1 from '../../../assests/one.jpg'
import img2 from '../../../assests/two.jpg'

function Travel() {
    return ( 
        <div className="TravelAndHotel">
            <div className="travel">
                <span>Travel</span>
                <span>Mobile Application</span>
                <span>Seen by</span>
                <div className="images">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </div>
                <div className="btnbtn">
                    <button>Tour</button>
                    <button>Trip</button>
                </div>
                <button>Transport</button>
            </div>
            <div className="travel">
                <span>Hotel</span>
                <span>Dashboard</span>
                <span>Seen by</span>
                <div className="images">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img1} alt="" />
                </div>
                <div className="btnbtn">
                    <button>Tour</button>
                    <button>Trip</button>
                </div>
                <button>Transport</button>
            </div>
        </div>
     );
}

export default Travel;