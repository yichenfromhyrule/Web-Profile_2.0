import React from 'react';
import './SectionInfo.css';
import SubSection from './SubSection/SubSection';

function SectionInfo(props) {
    return (
        <div className="container">
            <div className="sectionTitle">
                <p> {props.title} </p>
            </div>
            <div className="sectionInfo">
                <p> {props.description} </p>
            </div>
            <SubSection />
        </div>
    )
}

export default SectionInfo
