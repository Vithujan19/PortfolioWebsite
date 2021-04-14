import React from 'react';
import './Services.css';
import { Container, Row, Col } from "react-bootstrap";

function Services() {
    return (
        <Row className="arlo_tm_section" id="services">
            <div className="arlo_tm_services_wrap">
                <div className="container">
                    <div className="arlo_tm_title_holder">
                        <h3>Amazing Services</h3>
                        <span>Meet my amazing services</span>
                    </div>
                    <div className="list_wrap">
                        <ul>
                            <li>
                                <div className="inner">
                                    <div className="icon" style={{ textAlign: "center" }}>
                                        <i className="icon-desktop icon-4x" style={{ color: "#EEAB61" }}></i>
                                    </div>
                                    <div className="title_service">
                                        <h3>WebSites & WebApps</h3>
                                    </div>
                                    <div className="text">
                                        <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <div className="icon" style={{ textAlign: "center" }}>
                                        <i className="icon-mobile-phone icon-4x" style={{ color: "#EEAB61" }}></i>
                                    </div>
                                    <div className="title_service">
                                        <h3>Mobile Apps</h3>
                                    </div>
                                    <div className="text">
                                        <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <div className="icon" style={{ textAlign: "center" }}>
                                        <i className="icon-gift icon-4x" style={{ color: "#EEAB61" }}></i>
                                    </div>
                                    <div className="title_service">
                                        <h3>Web Design</h3>
                                    </div>
                                    <div className="text">
                                        <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Row>
    )
}

export default Services
