import { Col, Container, Row } from "react-bootstrap"
import { Logo } from "../header/logo.js"


export const Footer = () => {
    return (

        <>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col>
                        <h1>Nomen Notae</h1>
                        <p >Hoc est brevis descriptio notae, quae eius principales proprietates ac venustatem illustrat.</p>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center"><Logo></Logo></Col>
                    <Col className="d-flex justify-content-end align-items-center"><div className="d-flex gap-3">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white rounded-circle p-2">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-info text-white rounded-circle p-2">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white rounded-circle p-2" style={{ backgroundColor: '#0077b5' }}>
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="btn text-white rounded-circle p-2" style={{ backgroundColor: '#db4437' }}>
                            <i className="fab fa-google"></i>
                        </a>
                    </div></Col>

                </Row>
                <Row style={{ border: 'none', borderTop: '2px solid black', margin: '0 auto' }} />
            </Container>


            <div className="text-center mt-2" >
                <p >2024 iot bla bla bla</p>
            </div>



        </>
    )

}