import React from 'react';
import './HomeSlider.css';
import image1 from './../../images/sliderImg/image1.jpg';

function HomeSlider(props) {
    return (
        <div className="sliderComponent" style={{backgroundImage:`url(${props.image})`}}>
            <div >
                <h1>Hahaha</h1>
            </div>
        </div>
    )
}

export default HomeSlider
