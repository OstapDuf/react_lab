import { Col, Container, Nav, Navbar, NavLink, Row } from "react-bootstrap";
import { Logo } from "./logo";
import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand><Logo /></Navbar.Brand>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs="auto">
                    
                            <Nav.Link as={Link} to="/" className="d-inline-block">Home</Nav.Link>
                        </Col>
                        <Col xs="auto">
                            < NavLink as={Link} to="/catalog" className="d-inline-block">Catalog</NavLink>
                        </Col>
                        <Col xs="auto">
                            <Nav.Link as={Link} to="/cart" className="d-inline-block">Cart</Nav.Link>
                        </Col>
                        {/* Add more buttons here if needed */}
                    </Row>
                    
                </Container>
              

            </Container>
            
        </Navbar>
    );
};
