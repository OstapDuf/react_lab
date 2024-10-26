import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Logo } from "./logo"
import Button from 'react-bootstrap/Button';
export const Header = () => {
    // return (
    //     <>
    //         <Logo/>
    //         <Button variant="outline-secondary" className="fw-medium">Home</Button>
    //         <Button variant="outline-secondary">Catalog</Button>
    //         <Button variant="outline-secondary">Cart</Button>
    //     </>)
    return (
        <Navbar bg="light" data-bs-theme="light">
            
            <Container>
                <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs="auto">
                        <Nav.Link className="d-inline-block" href="#home">Home</Nav.Link>
                        </Col >
                        <Col xs="auto">
                        <Nav.Link className="d-inline-block" href="#features">Features</Nav.Link>
                        </Col>
                        <Col xs="auto">
                        <Nav.Link className="d-inline-block" href="#pricing">Pricing</Nav.Link>
                        </Col>
                    
                    
                    
                    </Row>

                </Container>

            </Container>
        </Navbar>
    )
}