import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from './Techstack';
import './Services.css';

function Skills() {
    return (

        <Row class="arlo_tm_section relative" id="skills">
            <div class="arlo_tm_about_wrapper_all">
                <div class="container">
                    <div className="arlo_tm_title_holder">
                        <h3>Professional Skills</h3>
                        <span>I worked with</span>
                    </div>

                    <Row style={{ marginBottom: "100px" }}>
                        <Col>
                            <Techstack iconName='devicon-java-plain-wordmark' />
                            <Techstack iconName='devicon-flutter-plain' />
                        </Col>
                        <Col>
                            <Techstack iconName='devicon-c-plain' />
                            <Techstack iconName='devicon-nodejs-plain-wordmark ' />
                        </Col>
                        <Col>
                            <Techstack iconName='devicon-javascript-plain ' />
                            <Techstack iconName='devicon-express-original-wordmark' />
                        </Col>
                        <Col>
                            <Techstack iconName='devicon-python-plain-wordmark ' />
                            <Techstack iconName='devicon-react-original-wordmark' />
                        </Col>
                        <Col>
                            <Techstack iconName='devicon-mongodb-plain-wordmark' />
                            <Techstack iconName='devicon-git-plain-wordmark' />
                        </Col>
                        <Col>
                            <Techstack iconName='devicon-mysql-plain' />
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
