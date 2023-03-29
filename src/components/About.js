import React, { Component } from 'react';
import './Services.css';
import profile from './images/Profile.png';
import Type from './Type';
import { Container, Row, Col } from "react-bootstrap";


class About extends Component {
    render() {
        return (
            <Row className="arlo_tm_section relative" id="experience">
                <div className="arlo_tm_about_wrapper_all">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Experience</h3>
                            <span>Learn more about me</span>
                        </div>

                        <div class="main">
                            <h1 class="center">Professional & Educational Qualifications</h1>
                            <ul class="timeline">
                                <li class="timeline-item">
                                    <div class="timeline-content">
                                        <h3>DevOps Engineer Intern</h3>
                                        <p>September 2021 - July 2022<br/>
                                        Omobio (pvt) Ltd</p>
                                        <p>
                                            <ul>
                                                <li>Worked under micro-service architecture</li>
                                                <li>Developed and maintained automated CI/CD Pipeline for code deployment using Jenkins</li>
                                                <li>Developed and maintained automated CI/CD Pipeline for code deployment using Jenkins</li>
                                                <li>Built and deployed Docker containers for implementing Microservice Architecture</li>
                                                <li>Orchestrated Docker container cluster using Kubernetes(EKS)</li>
                                                <li>Experienced in deploying application in AWS</li>
                                                <li>Developed frontend application using React JS</li>
                                                <li>Source code management in GitHub & GitLab</li>
                                                <li>Worked under agile practice in scrum teams and experience in JIRA</li>
                                            </ul>
                                        </p>
                                        <button>Learn More</button>
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class="timeline-content">
                                        <h3>B.SC. (HONS) INFORMATION TECHNOLOGY</h3>
                                        <p>University of Moratuwa<br/>
                                        2018 - 2023
                                        </p>
                                        <p>
                                        FINAL YEAR RESEARCH @UOM
Research Project regarding enhancement of the primary school students’ English knowledge using computer vision and NLP,
Role: Unpaired Image captioning using unsupervised learning.
                                        </p>
                                        <p>
                                        SECOND YEAR PROJECT @UOM
                                        Receipt and Expense Management System,
Technologies Used : React JS, Node.js, MongoDB, Express.js, Flutter,
Role: Front-end and Back-end development for Expense and Reimbursement.
                                        </p>
                                        <p>FIRST YEAR HARDWARE PROJECT @UOM
Smart Compost Bin, Technologies Used : Atmel studio, C language, DHT11, MQ5, Ultrasonic sensor, Motor controller,
Role: Handled DHT11 sensor and Motor controller.</p>
                                        <button>Learn More</button>
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class="timeline-content">
                                        <h3>G.C.E ADVANCED LEVEL</h3>
                                        <p>
Hartley College, Point Pedro. <br/>
Biological Science - 2A, B <br/>2008 - 2017
                                        </p>
                                        <p>
                                        Provincial Level Chess Campion (2008 - 2017)<br/>
National Level School Team Chess Captain (2012)<br/>
District Champion in High Jump (2010)<br/>
Prefect at School - 2015 - 2017 <br/>School Athletic Captain - 2015
                                        </p>
                                        <button>Learn More</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Row>
        )
    }
}

export default About;
