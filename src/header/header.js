import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('userEmail');

    const handleSignOut = () => {
        console.log('Sign out clicked');
        localStorage.removeItem('userEmail');
        console.log('User signed out');
        navigate('/login');
    };

    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand></Navbar.Brand>
                <Row className="w-100 align-items-center">
                    <Col>
                        <Row className="justify-content-center">
                            <Col xs="auto">
                                <Nav.Link as={Link} to="/" className="d-inline-block">Home</Nav.Link>
                            </Col>
                            <Col xs="auto">
                                <Nav.Link as={Link} to="/catalog" className="d-inline-block">Catalog</Nav.Link>
                            </Col>
                            <Col xs="auto">
                                <Nav.Link as={Link} to="/cart" className="d-inline-block">Cart</Nav.Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="auto">
                        {user && (
                            <button className="btn btn-danger" onClick={handleSignOut}>Sign Out</button>
                        )}
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};
