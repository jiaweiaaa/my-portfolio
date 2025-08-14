import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import logo from '../assets/img/logo.png';
import NavIcon1 from '../assets/img/git-logo.png';
import NavIcon2 from '../assets/img/in-logo.png';
import NavIcon3 from '../assets/img/fig-logo.png';
//import { HashLink } from 'react-router-hash-link';
//import {
//  BrowserRouter as Router
//} from "react-router-dom";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink =(value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/jiaweiaaa">
                <img src={NavIcon1} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/jiawei-li-au/">
                <img src={NavIcon2} alt="" />
              </a>
              <a href="https://www.figma.com/files/team/1303899261123771902/drafts?fuid=1212366999998547057">
                <img src={NavIcon3} alt="" />
              </a>
          
            </div>

              <button className="vvd" >
              <span>Let's Connect</span>
              </button>

          </span>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
