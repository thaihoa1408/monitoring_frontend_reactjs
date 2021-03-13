import logo from '../../logo.svg';
import React from 'react';
import './SiteKpi.css';
import WaveWidget from './wagewidget/WaveWidget';
import video from "../../videos/video-2.mp4"
function SiteKpi(props) {
    return (
        <div className="sitekpi">
            <video src={video} autoPlay loop muted />
            <WaveWidget />
        </div>
    );
}

export default SiteKpi;