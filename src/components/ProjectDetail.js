import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import projGif1 from "../assets/img/project-web1.gif";
import projGif2 from "../assets/img/project-web2.gif";
import projGif3 from "../assets/img/project-web3 .gif";

export const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // 项目详细数据
    const projectsData = {
        1: {
            title: "Business Startup Website",
            description: "Design & Development",
            fullDescription: "A comprehensive business startup website featuring modern design principles and responsive layouts. Built with React and Bootstrap for optimal performance and user experience.",
            imgUrl: projGif1,
            technologies: ["React", "Bootstrap", "CSS3", "JavaScript"],
            demoLink: "#",
            githubLink: "#"
        },
        2: {
            title: "E-commerce Platform",
            description: "Design & Development",
            fullDescription: "Full-featured e-commerce platform with shopping cart, payment integration, and user authentication. Designed for scalability and performance.",
            imgUrl: projGif2,
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            demoLink: "#",
            githubLink: "#"
        },
        3: {
            title: "Portfolio Website",
            description: "Design & Development",
            fullDescription: "Modern portfolio website showcasing creative work with smooth animations and interactive elements. Optimized for all devices.",
            imgUrl: projGif3,
            technologies: ["React", "CSS Animations", "React Router"],
            demoLink: "#",
            githubLink: "#"
        },
        4: {
            title: "Business Startup",
            description: "Design & Development",
            fullDescription: "Another innovative business solution featuring cutting-edge technology and user-centric design.",
            imgUrl: projGif1,
            technologies: ["React", "Bootstrap", "REST API"],
            demoLink: "#",
            githubLink: "#"
        },
        5: {
            title: "Business Startup",
            description: "Design & Development",
            fullDescription: "Modern web application built with the latest technologies and best practices.",
            imgUrl: projGif2,
            technologies: ["React", "TypeScript", "Material UI"],
            demoLink: "#",
            githubLink: "#"
        },
        6: {
            title: "Business Startup",
            description: "Design & Development",
            fullDescription: "Comprehensive digital solution designed to meet modern business needs.",
            imgUrl: projGif3,
            technologies: ["React", "Redux", "Styled Components"],
            demoLink: "#",
            githubLink: "#"
        }
    };

    const project = projectsData[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <section className="project-detail">
                <Container>
                    <h2>Project not found</h2>
                    <Button onClick={() => navigate('/')}>Back to Home</Button>
                </Container>
            </section>
        );
    }

    return (
        <section className="project-detail">
            <Container>
                <Row className="mb-4">
                    <Col>
                        <Button 
                            variant="outline-light" 
                            onClick={() => navigate('/')}
                            className="mb-4"
                        >
                            ← Back to Projects
                        </Button>
                    </Col>
                </Row>
                
                <Row className="align-items-center">
                    <Col xs={12} md={12}>
                        <div className="project-detail-img">
                            <img src={project.imgUrl} alt={project.title} />
                        </div>
                    </Col>
                    
                    <Col xs={12} md={12}>
                        <div className="project-detail-content">
                            <h2>{project.title}</h2>
                            <p className="project-subtitle">{project.description}</p>
                            <p className="project-full-desc">{project.fullDescription}</p>
                            
                            <div className="technologies mb-4">
                                <h4>Technologies Used:</h4>
                                <div className="tech-tags">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};