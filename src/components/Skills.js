import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from './Techstack';
import './Services.css';

function Skills() {
    return (

        <Row class="arlo_tm_section relative" id="skills">
            <div class="arlo_tm_skills_wrapper_all">
                <div class="container">
                    <div className="arlo_tm_title_holder">
                        <h3>Professional Skills</h3>
                        <span>I worked with</span>
                    </div>

                    <Row style={{ marginBottom: "100px" }}>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-docker-plain-wordmark' />
                        </Col>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-kubernetes-plain-wordmark' />
                        </Col>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-amazonwebservices-plain-wordmark' />
                        </Col>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-jenkins-plain' />
                        </Col>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-java-plain-wordmark' />
                        </Col>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-flutter-plain' />
                        </Col>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-c-plain' />
                        </Col>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-nodejs-plain-wordmark ' />
                        </Col>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-javascript-plain ' />
                        </Col>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-express-original-wordmark' />
                        </Col>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-python-plain-wordmark ' />
                        </Col>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-react-original-wordmark' />
                        </Col>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-mongodb-plain-wordmark' />
                        </Col>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-git-plain-wordmark' />
                        </Col>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-mysql-plain' />
                        </Col>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-wordpress-plain-wordmark' />
                        </Col>
                        <Col lg="2" md="4" xs="6">
                            <Techstack iconName='devicon-premierepro-plain' />
                        </Col>
                    </Row>
                </div>
            </div>
        </Row>




        // <Row className="arlo_tm_section" id="skills">
        //     <div className="container">
        //         <div className="arlo_tm_title_holder">
        //             <h3>Professional Skills</h3>
        //             <span>I worked with</span>
        //         </div>
        //         <Row style={{marginBottom:"100px"}}>
        //             <Col>
        //                 <Techstack iconName='devicon-java-plain-wordmark' />
        //                 <Techstack iconName='devicon-javascript-plain ' />
        //             </Col>
        //             <Col>
        //                 <Techstack iconName='devicon-python-plain-wordmark ' />
        //                 <Techstack iconName='devicon-c-plain' />
        //             </Col>
        //             <Col>
        //                 <Techstack iconName='devicon-nodejs-plain-wordmark ' />
        //                 <Techstack iconName='devicon-express-original-wordmark' />
        //             </Col>
        //             <Col>
        //                 <Techstack iconName='devicon-flutter-plain' />
        //                 <Techstack iconName='devicon-react-original-wordmark' />
        //             </Col>
        //             <Col>
        //                 <Techstack iconName='devicon-mysql-plain' />
        //                 <Techstack iconName='devicon-mongodb-plain-wordmark' />
        //             </Col>
        //             <Col>
        //                 <Techstack iconName='devicon-git-plain-wordmark' />
        //                 <Techstack iconName='devicon-premierepro-plain' />
        //             </Col>
        //         </Row>
        //     </div>
        // </Row>
    )
}

export default Skills
