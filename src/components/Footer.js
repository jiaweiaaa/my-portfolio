import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.png"
import NavIcon1 from '../assets/img/git-logo.png';
import NavIcon2 from '../assets/img/in-logo.png';
import NavIcon3 from '../assets/img/fig-logo.png';

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
                        <a href="https://github.com/jiaweiaaa">
                            <img src={NavIcon1} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/jiawei-li-au/">
                            <img src={NavIcon2} alt="" />
                        </a>
                        <a href="https://www.figma.com/@jiaweili1">
                            <img src={NavIcon3} alt="" />
                        </a>
                    </div>
                    <p>CopyRight 2025.  All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    
    </footer>
 )

}