import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/harmonyHacksLogoWithTextGreen 2.svg';
import '../styles/Global.css'; 

export const NavbarBootstrap = () => {
    const location = useLocation();



    return (
        <Navbar className="custom-navbar" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className="navbar-brand">
                    <img
                        src={logo}
                        width="80"
                        height="60"
                        className="d-inline-block align-top me-3"
                        alt="Harmony Hacks logo"
                    />
                    HARMONY HACKS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link 
                            as={Link} 
                            to="/about" 
                            active={location.pathname === '/about'}
                            className="navbar-link"
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/events" 
                            active={location.pathname === '/events'}
                            className="navbar-link"
                        >
                            Events
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/resources" 
                            active={location.pathname === '/resources'}
                            className="navbar-link"
                        >
                            Resources
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/contact" 
                            active={location.pathname === '/contact'}
                            className="navbar-link"
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarBootstrap;
