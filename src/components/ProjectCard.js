import { Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const ProjectCard = ({ id, title, description, imgUrl }) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/project/${id}`);
    };
    return (
        <Col sm={6} md={6} >
            <div className="proj-imgbx"  onClick={handleClick} style={{ cursor: 'pointer' }}>
                <img src={imgUrl} alt="" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}