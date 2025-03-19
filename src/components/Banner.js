import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg";
//import'animate.css';
//import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [ loopNum, setLoopNum ] = useState(0);
    const  [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['web developer', 'web designer', 'UI/UX designer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*100);
    const period = 2000;
   

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () =>{clearInterval(ticker)} ;
    }, [text,loopNum])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta /2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && text === ''){
            setIsDeleting(false);
            setLoopNum(prevNum => prevNum + 1);
            setDelta(500);
         
        }
        
    }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my portfolio</span>
                <h1>{'Hi I am Vivian Li '} <br></br><span className="wrap">{text}</span></h1>
                <p>A full-stack developer with a breadth of experience in building responsive and scalable applicationsfrom ideation to deployment, possessing a strong foundation in both front-end and back-endtechnologies. Eager to stay up-to-datewithemerging technologies and contribute to the success of any team.
                </p>
                <button onClick={()=> console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={HeaderImg} alt="Header img" />
                </Col>

        </Row>
      </Container>
    </section>
  );
}