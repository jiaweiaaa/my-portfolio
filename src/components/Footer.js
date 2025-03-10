import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"

export const Footer = () => {
 return(
    <footer className="footer align-items-center">
        <Container >
            <Row className="align-items-center">
                <Col sm={6} size= {12}>
                    <img src={logo} alt="" />
                </Col>
                <Col sm={6} size= {12} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href=""><img src={navIcon1} alt="" /></a>
                        <a href=""><img src={navIcon2} alt="" /></a>
                        <a href=""><img src={navIcon3} alt="" /></a>
                    </div>
                    <p>CopyRight 2025.  All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    
    </footer>
 )

}