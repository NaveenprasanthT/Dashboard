import React from 'react';
import './transaction.css';
import img1 from '../../../assests/one.jpg';
import img2 from '../../../assests/two.jpg';
import img3 from '../../../assests/three.png';
import {BsArrowRight } from 'react-icons/bs'

function Transaction() {
    return ( 
        <div className="transactionContainer">
            <div className="detail">
                <div className="personalDetail">
                    <span>Transaction Detail</span>
                    <span>Hi Hira</span>
                    <span>$4,763.40</span>
                    <span>Available Balance</span>
                </div>
                <div className="profile">
                    <img src={img2} alt="" />
                    <span>****3863</span>
                </div>
            </div>
            <div className="imageDetail">
                <span><BsArrowRight/></span>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img1} alt="" />
            </div>
            <button class="send">Send</button>
        </div>
     );
}

export default Transaction;