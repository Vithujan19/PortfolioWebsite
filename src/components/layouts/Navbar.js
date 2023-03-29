import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import '../layouts/Navbar.css';

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <p className="nav-logo">Vith<span className="jan">ujan</span></p>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link
              className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link"
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link"
                activeClass="active"
                to="article"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
