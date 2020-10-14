import React from 'react';
import { Button } from '../Button/Button';
import './MainSection.css';
import '../../App.css';

function MainSection() {
    return (
        <div className = 'main-container'>
            <video src="/videos/Nature/MilkyWay.mp4" autoPlay loop muted />
            <h1>HII</h1>
            <p>What should I say...</p>
            <div className="main-btns">
                <Button 
                className = 'btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >
                    Start
                </Button>
                <Button 
                className = 'btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'
                >
                    Start2
                </Button>
            </div>
        </div>
    )
}

export default MainSection
