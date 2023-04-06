import React, { useState } from 'react'
import './Slot.css'

function Slot() {

    const [clickedDate, setClickedDate ] = useState(12);

    const freeSlots = [
        {
            date: 12,
            month:"June"
        },
        {
            date: 18,
            month:"June"
        },
        {
            date: 20,
            month:"June"
        },
        {
            date: 2,
            month:"July"
        },
        {
            date: 10,
            month:"July"
        },
        {
            date: 15,
            month:"July"
        },
    ]

    return ( 
        <div className='slotMain'>
            <span className='heading'>Free Slots Available</span>
            <div className="slotContainer">
            {freeSlots.map((slot)=>(
            <div className="slot" 
                id={clickedDate === slot.date ?"activedate" : ""}
                onClick={()=>{setClickedDate(slot.date)}}
                >
                <span className='date'>{slot.date}</span>
                <span>{slot.month}</span>
            </div>
            ))}
        </div>
    </div>
     );
}

export default Slot;