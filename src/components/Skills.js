import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import lineBreaker from "../assets/img/line-break.png";
import FallingText from "./FallingText";
import ScrollStack, { ScrollStackItem } from './ScrollStack'

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
            <Row>
                <Col>
                  <div className="experience-bx">
                    <h2>
                    Experience
                    </h2>
                    <ScrollStack>
                      <ScrollStackItem>
                      <Row>
                      
                      <Col sm={6} md={6}>
                        <div className="experience-years">
                          <h5>Apr 2022 – Jan 2023</h5>
                          
                        </div>
                      </Col>
                      <Col sm={6} md={6}>
                        <div className="experience-item">
                          <h5>Web Operation & Maintenance Specialist</h5>
                          <p className="comp-name">Kingtex International Pty. Ltd</p>
                          <h6>Key Responsibilities / Achievement: </h6>
                          <p>
                          <img src={lineBreaker} alt="img" className="linebr" /> Maintained the company's official website using WordPress, ensuring that the website was upto date with the latest content and information. <br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Managed all products, user payments, and order processing on the company's website using WooCommerce. <br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Maintained the synchronization of the website and other platforms' product updates using the WooCommerce API key<br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Communicated with leadership to understand website requirements and translated the mintoactionable website functionalities.<br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Collaborated with colleagues working on the mobile website to ensure that the websitefunctioned smoothly across different devices.
                          
                          </p>
                        </div>
                      </Col>
                     
                    </Row>

                    </ScrollStackItem>
                    <ScrollStackItem>
                   
                    <Row>
                      
                      <Col sm={6} md={6}>
                        <div className="experience-years">
                          <h5>Jan 2023 – Jun 2023</h5>
                          
                        </div>
                      </Col>
                      <Col sm={6} md={6}>
                        <div className="experience-item">
                          <h5>Full Stack Development</h5>
                          <p className="comp-name">Petlover</p>
                          <h6> Description: </h6>
                          <p> The core of this project is to allow pet lovers to connect, share, and make friends. 
                            Andit imitates the interface of Twitter. The app's current version supports users to post, comment, 
                            and reply. At the same time, the web application have integrated the most popular OpenAI, providing users withChatGPT and image generation features.</p>
                          <br />
                          <h6>Key Responsibilities / Achievement: </h6>
                          <p>
                          <img src={lineBreaker} alt="img" className="linebr" /> Implemented PetLover web application with React, ESLint, JavaScript ES6, HTML5, CSS3, LESS, Font Awesome Icons and Responsive Web Design. <br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Base on MongoDB,design database table. Connected mongoDB with mongoose. <br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Implemented PetLover server with Node.js and Express framework 4.18.2.<br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Design RESTful APIs, use RESTful APIs to implement front-end and back-end interaction.<br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Build up Postman environment, test and debug RESTful APIs.<br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Split the web page into independent components, and design reusable components.<br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Implement UI design with Figma.<br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Deployed web application onto AWS S3.<br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Use OpenAI to generate images and Answer user’s question.<br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Use AWS Lambda, API Gateway and OpenAI APIs to implement AWS Serverless.
                          </p>
                        </div>
                      </Col>
                     
                    </Row>
                   </ScrollStackItem>

                   <ScrollStackItem>
                    <Row>
                      
                      <Col sm={6} md={6}>
                        <div className="experience-years">
                          <h5>Jun 2023 – Nov 2024</h5>
                          
                        </div>
                      </Col>
                      <Col sm={6} md={6}>
                        <div className="experience-item">
                          <h5>UI Designer & Front-End Developer</h5>
                          <p className="comp-name">T & R Sports</p>
                          <h6> Description: </h6>
                          <p> Specializing in UI design and front-end development, I create visually appealing appinterfaces and website homepages. My expertise lies in transforming design concepts into interactiveand functional front-end solutions.</p>
                          <br />
                          <h6>Key Responsibilities / Achievement: </h6>
                          <p>
                          <img src={lineBreaker} alt="img" className="linebr" /> Designed and developed user interfaces for web and mobile applications, ensuring an intuitiveand visually appealing user experience. <br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Collaborated with cross-functional teams, including product managers and developers, togatherrequirements, conduct usability testing, and refine design concepts. <br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Created wireframes, prototypes, and mockups using tools such as Adobe illustrator, Photoshopand Figma to communicate design ideas and concepts.<br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Translated design concepts into responsive web pages using HTML, CSS, and JavaScript, optimizing for cross-browser compatibility and performance.<br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Worked closely with the development team to integrate front-end code into the project'scodebase, maintaining consistency in design and functionality.<br />
                          <img src={lineBreaker} alt="img" className="linebr" /> Managed and maintained WordPress and Shopify websites, including content designandupdates.<br />
                          <img src={lineBreaker} alt="img" className="linebr" /> handled visual promotional video editing for our company as needed.</p>
                        </div>
                      </Col>
                     
                    </Row>
                   </ScrollStackItem>
                   </ScrollStack>
                  </div>
                
                </Col>
            </Row>

        </Container>
        <img src={colorSharp} alt="Image" className="background-image-left" />
      </section>
    )
        
        


}