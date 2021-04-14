import React, { useState } from "react";
import whatspp from './images/whatsapp.png';
import fbfoot from './images/fbfoot.png';
import lnfoot from './images/lnfoot.png';
import '../App.css';
import { Container, Row, Col } from "react-bootstrap";
const axios = require('axios').default;

class Contact extends React.Component {
  render() {
    return (
      <Row className="arlo_tm_section" id="contact">
        <div className="arlo_tm_contact_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder news">
              <h3>Contact ME</h3>
              <span>Feel free to contact</span>
            </div>
            <div className="ContactInfo">

            </div>

            <div className="arlo_tm_contact_wrap_all">
              <div className="container">
                <div className="leftbox">
                  <div className="arlo_tm_mini_title_holder contact">
                    <h4>Get in Touch</h4>
                  </div>
                  <div className="short_info_wrap">
                    <ul>
                      <li><p><label>Address:</label><span><a href="https://www.google.com/maps/@9.8132371,80.2288592,3a,75y,324.26h,78.35t/data=!3m6!1e1!3m4!1svTstvYkfqgk7BNzjbvuPgA!2e0!7i13312!8i6656">Saraiyady, Puloly South, Puloly, Sri Lanka</a></span></p></li>
                      <li><p><label>Email:</label><span><a href="mailto:vithusundar@gmail.com">vithusundar@gmail.com</a></span></p></li>
                      <li><p><label>Phone:</label><span><a href="tel:+94772789765">+94772789765</a></span></p></li>
                      <li><p><label>Website:</label><span><a href="https://www.whatyouhave.ml/">www.whatyouhave.ml</a></span></p></li>
                    </ul>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_contact_wrap">
                    <div className="main_input_wrap">
                      <div className="wrap">
                      <a href="https://wa.me/+94772789765" style={{textDecoration:"none", color:"#000"}}><img style={{width:"32px", height:"auto"}} src={whatspp} alt="" />  (+94)772789765</a>
                      </div>
                      <div className="wrap">
                      <a href="https://web.facebook.com/vithusundar" style={{textDecoration:"none", color:"#000"}}><img style={{width:"30px", height:"auto", paddingLeft:"2px"}} src={fbfoot} alt="" />  Vithujan Sundaramoorthy</a>
                      </div>
                      <div className="wrap">
                      <a href="https://www.linkedin.com/in/vithujan/" style={{textDecoration:"none", color:"#000"}}><img style={{width:"30px", height:"auto", paddingLeft:"4px"}} src={lnfoot} alt="" />  Sundaramoorthy Vithujan</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Row>
    );
  }
}

export default Contact;

