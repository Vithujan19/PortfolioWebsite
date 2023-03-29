import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="FootContainer">
            <p className="FootPara">Developed By Vithujan Sundaramoorthy <br/>
            <a href="vithujan.tech" style={{textDecoration:"none", color:"rgba(237, 105, 189, 1)"}}>vithujan.tech</a> <br/>
            <span className="FootSpan">&copy; Copyright {new Date().getFullYear()}</span>
            </p>
        </div>
    )
}

export default Footer;
