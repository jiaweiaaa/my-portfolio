import { Nav, Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projGif1 from "../assets/img/project-web1.gif";
import projGif2 from "../assets/img/project-web2.gif";
import projGif3 from "../assets/img/project-web3 .gif";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projGif1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projGif2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projGif3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projGif1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projGif2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projGif3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Below are the projects I completed previously.
            </p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
                <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                    <Nav.Link eventKey="first">Websites</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Graphic</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third" >
                    Apps
                    </Nav.Link>
                </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((projects, index) =>{
                                    return (
                                        <ProjectCard
                                            key={index}
                                            title={projects.title}
                                            description={projects.description}
                                            imgUrl={projects.imgUrl} />
                                    )
                                }) 
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                    <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
                </Tab.Content>
                
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
};
