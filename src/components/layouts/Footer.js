import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="FootContainer">
            <p className="FootPara">Developed By Sundaramoorthy Vithujan <br/>
            <span className="FootSpan">Copyright &copy;{new Date().getFullYear()}</span>
            </p>
        </div>
    )
}

export default Footer;
