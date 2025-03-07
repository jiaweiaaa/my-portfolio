import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {
    const formInitialDetails = {
        firstName:'',
        lastName:'',
        email:'',
        message:''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value ) => {
        setFormDetails({
            ...formDetails,
             [category]: value
            });

    }

    const handleSubmit =  () => {

    }

    return(
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6} className='px-1'>
                                    <input type="text" placeholder="First Name" value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName',e.target.value)} />
                                </Col>
                                <Col md={6}>
                                    <input type="text" placeholder="Last Name" value={formDetails.lastName} onChange={(e) => onFormUpdate('lastName',e.target.value)} />
                                </Col>
                                <Col md={6} className='px-1'>
                                    <input type="email" placeholder="Email Address" value={formDetails.email} onChange={(e) => onFormUpdate('email',e.target.value)} />
                                </Col>
                                <Col md={6}>
                                    <input type="tel" placeholder="Phone No." value={formDetails.phone} onChange={(e) => onFormUpdate('phone',e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea  rows="6" placeholder="Message" value={formDetails.message} onChange={(e) => onFormUpdate('message',e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span>{buttonText}</button>
                                </Col>
                                {
                                    status.message&&
                                    <Col>
                                        <p className={status.success === false? "danger": "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>

                        </form>
                    </Col>
                </Row>

            </Container>
        </section>

    )
}