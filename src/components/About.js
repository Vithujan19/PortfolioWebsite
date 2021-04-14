import React, { Component } from 'react';
import './Services.css';
import profile from './images/Profile.png';
import Type from './Type';
import { Container, Row, Col } from "react-bootstrap";


class About extends Component {
    render() {
        return (
            <Row class="arlo_tm_section relative" id="about">
                <div class="arlo_tm_about_wrapper_all">
                    <div class="container">
                        <div class="arlo_tm_title_holder">
                            <h3>Welcome</h3>
                            <span>Learn more about me</span>
                        </div>
                        <div class="arlo_tm_about_wrap">
                            <div class="author_wrap">
                                <div class="leftbox">
                                    <div class="about_image_wrap parallax" data-relative-input="true">
                                        <div id="inner1">
                                            <div class="demo-img">
                                                <div class="demo-overlay">
                                                    <svg src="https://lh3.googleusercontent.com/lHxIshJ8pKAZR-ltc9HMJnF_3UpwtvYuqJw3vZ4P79Zm-XhBIbcQdZJHLUukSvBRKEH9g-_7IikjlI5Xdmu4MsGsHWg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="rightbox">
                                    <div class="arlo_tm_mini_title_holder">
                                        <h4 style={{ color: "#EEAB61" }}>I am a
                                        <div style={{ padding: 0, textAlign: "left", color: "#ED69BD" }}>
                                                <Type />
                                            </div>
                                        </h4>
                                    </div>
                                    <div class="definition">
                                        <p>Hi! My name is Sundaramoorthy Vithujan. I am a Undergraduate Student at University of Moratuwa, Faculty of Information Technology and have been working hard to improve my IT skills and my knowledge. Currently I am working on a web-App & Mobile App university projects under TechWire Software company as well as I do my own projects. I have started to learn Ethical Hacking/Hacking & Patching and I have interested to join in cyber based researches too. In addition to that, I have an experience in Atmega based Projects(Smart Compost Bin - Hardware Project). I have uploaded my project in the  \"Portfolio\" section. You can see them. </p>
                                    </div>
                                    <div class="about_short_contact_wrap">

                                    </div>
                                    <div class="buttons_wrap">
                                        <ul>
                                            <li>
                                                <a target="_blank" href="https://storage.turbo360.co/vithujan_portfolio-ccwuvn/Vithujan%20New%20CV%20Update.pdf"><span>Download Resume</span></a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        )
    }
}

export default About;
