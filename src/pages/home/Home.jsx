import React from 'react'
import './Home.css'
import Left from '../../components/left/Left';
import Center from '../../components/center/Center';
import Right from '../../components/right/Right';

function Home() {
    return ( 
        <div className="home">
            <div className="left">
                <Left/>
            </div>
            <div className="center">
                <Center/>
            </div>
            <div className="right">
                <Right/>
            </div>
        </div>
     );
}

export default Home;
