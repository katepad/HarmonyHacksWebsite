import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/harmonyHacksLogoWithTextGreen 2.svg';

export const NavbarBootstrap = () => {
    const location = useLocation();

    const navStyle = {
        fontSize: '1.5rem',
        marginLeft: '1rem'
    };

    const brandStyle = {
        fontSize: '1.5rem',
        marginLeft: '1rem',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '0.5rem'
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" style={brandStyle}>
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
                            style={navStyle}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/events" 
                            active={location.pathname === '/events'}
                            style={navStyle}
                        >
                            Events
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/resources" 
                            active={location.pathname === '/resources'}
                            style={navStyle}
                        >
                            Resources
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/contact" 
                            active={location.pathname === '/contact'}
                            style={navStyle}
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
