import React from 'react';
import './Services.css';
import { Container, Row, Col } from "react-bootstrap";
import hw from './images/Hardware.gif';
import ELRTC from './images/ss.png';
import Portfolio from './images/portfolio.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Services() {
    return (
        <Row className="arlo_tm_section relative" id="portfolio">
            <div className="arlo_tm_portfolio_wrapper_all">

                <div className="arlo_tm_second_portfolio">
                    <div className="container">
                        <div className="arlo_tm_portfolio_wrap">
                            <div className="arlo_tm_title_holder portfolio">
                                <h3>Portfolio</h3>
                                <span>My creative works</span>
                            </div>
                            <div className="arlo_tm_portfolio_titles"></div>
                            {/* <ul className="arlo_tm_portfolio_filter">
                                <li><a href="#" className="current" data-filter="*">All</a></li>
                                <li><a href="#" data-filter=".university">University Projects</a></li>
                                <li><a href="#" data-filter=".freelance">Freelance Projects</a></li>
                            </ul> */}
                            <ul className="arlo_tm_portfolio_list gallery_zoom">
                                <li className="freelance">
                                    <div data-aos="zoom-in" className="entry arlo_tm_portfolio_animation_wrap" data-title="Mobile App Development" data-category="Mobile App Development">
                                        <a target="_blank" href="https://github.com/Vithujan19/PortfolioWebsite.git">
                                            <img src={Portfolio} alt="" />
                                            <div className="arlo_tm_portfolio_image_main" data-img-url="https://lh3.googleusercontent.com/JydBwWoIN3PgTB9DeDGA4RHrRiu714zvqJ7BZVHVoeHQs9r78MLFGmYd6I74IrdVj5qxB0GTLupci2HbCs_paGEq6Q=s1920"></div>
                                        </a>
                                    </div>
                                </li>
                                <li className="university">
                                    <div data-aos="zoom-in" className="entry arlo_tm_portfolio_animation_wrap" data-title="Smart Compost Bin" data-category="University Hardware Project">
                                        <a target="_blank" href="https://github.com/Vithujan19/Hardware-Project.git">
                                            <img src={hw} alt="" />
                                            <div className="arlo_tm_portfolio_image_main" data-img-url="https://storage.turbo360.co/vithujan_portfolio-ccwuvn/Hardware.gif"></div>
                                        </a>
                                    </div>
                                </li>
                                <li className="freelance">
                                    <div data-aos="zoom-in" className="entry arlo_tm_portfolio_animation_wrap" data-title="ELRTC Web project" data-category="Web Development">
                                        <a target="_blank" href="https://guarded-hollows-00980.herokuapp.com/">
                                            <img src={ELRTC} alt="" />
                                            <div className="arlo_tm_portfolio_image_main" data-img-url="https://lh3.googleusercontent.com/V9r1DV56mnebwfmDXgoHFEm5HV52A-R_UAW0mYBRWIsz4IjMKF1EYvViPBuNNZfT33Um3yHcnqoBmQTZHDD6pxSgSw"></div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Row>

    )
}

export default Services
