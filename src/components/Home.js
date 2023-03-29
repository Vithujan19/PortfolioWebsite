import React from 'react';
import './Services.css';
import profile from './images/Profile.png';
import fb from './images/fb.png';
import insta from './images/instagrm.png';
import twit from './images/twit.png';
import linkedin from './images/linked.png';
import gitimg from './images/git.png';
import mediumimg from './images/medium.png';
import Type from './Type';
import { Container, Row, Col } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

function HomeSection() {
  return (
    <Row className='home-container' id="home">
      <div className="homeRow">
        <div className="socialColumn">
          <div className="social">
            <ul className="socialmedia">
              <li><a href="https://web.facebook.com/vithusundar"><img className="fbimg" src={fb} /></a></li>
              <li><a href="https://www.instagram.com/vithujan.s/"><img className="instaimg" src={insta} /></a></li>
              <li><a href="https://twitter.com/Vithujan_s"><img className="twitimg" src={twit} /></a></li>
              <li><a href="https://www.linkedin.com/in/vithujan/"><img className="lnimg" src={linkedin} /></a></li>
              <li><a href="https://github.com/Vithujan19"><img className="githubimg" src={gitimg} /></a></li>
              <li><a href="https://vithujan.medium.com"><img className="mediumimg" src={mediumimg} /></a></li>
            </ul>
          </div>
        </div>
        <div className="leftColumn">
          <h3 className="introh3">Hi! <br />
            I'm <span className="h3spa">Vithujan</span>
          </h3>
          <h4 className="introh4"><span className="h4spa"><Type /></span></h4>
          <a
            activeClass="active"
            href="https://drive.google.com/file/d/1wPxGeiZWSXxsXG1pzs54AUowxKsfsuYj/view?usp=sharing"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="introbtn">
              <p className="btnpara">View Resume</p>
            </div>
          </a>
        </div>
        <div className="rightColumn">
          <div className="profdiv">
            <img className="profile" src={profile} />
          </div>
        </div>
      </div>
    </Row>
  );
}

export default HomeSection;