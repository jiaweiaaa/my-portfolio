import { Nav, Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
              nostrum.
            </p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
                <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third" >
                    Tab Three
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
