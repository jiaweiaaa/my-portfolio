import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import FallingText from "./FallingText";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
      <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <FallingText
                          text={`Javascript, HTML5, CSS3, LESS, element UI, Bootstrap, npm, Font Awesome Icons, React.js, vue.js, eslint, prettier, git, github, agile, Jira, RESTful API, JSON, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, AWS, Figma, Adobe XD, Photoshop, Illustrator, responsive design, performance optimization, debugging, problem-solving,  user experience, design systems, design thinking, Google Workspace, Microsoft Office, Linux, Chrome DevTools, Postman, VS Code, GitHub`}
                          highlightWords={["React", "Javascript", "vue.js", "Node.js", "Express.js","RESTful API","Figma","Illustrator","Postman"]}
                          highlightClass="highlighted"
                          trigger="hover"
                          backgroundColor="transparent"
                          wireframes={false}
                          gravity={0.56}
                          fontSize="1.2rem"
                          mouseConstraintStiffness={0.9}
                        />
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="img" />
                                <h5>front-end development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="img" />
                                <h5>Back-end development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="img" />
                                <h5>UI/UX design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="img" />
                                <h5>Grafic design</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp} alt="Image" className="background-image-left" />
      </section>
    )
        
        


}