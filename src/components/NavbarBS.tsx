import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/Global.css'; 

export const NavbarBootstrap = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Navbar
            className={`custom-navbar ${scrolled ? "scrolled" : ""} sticky-top`}
            variant="dark"
            expand="lg"
        >
            <Container fluid>
                <div className="logo" />
                <Navbar.Brand as={Link} to="/" className="navbar-brand">
                    HARMONY HACKS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end" //Slide in from the right
                    className="custom-offcanvas"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">
                            HARMONY HACKS
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="ms-auto">
                            <Nav.Link
                                as={Link}
                                to="/about"
                                active={location.pathname === '/about'}
                                className="navbar-link navbar-button"
                            >
                                About Us
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/events"
                                active={location.pathname === '/events'}
                                className="navbar-link navbar-button"
                            >
                                Events
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/resources"
                                active={location.pathname === '/resources'}
                                className="navbar-link navbar-button"
                            >
                                Resources
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/hackathon"
                                active={location.pathname === '/hackathon'}
                                className="navbar-link navbar-button"
                            >
                                Hackathons
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/contact"
                                active={location.pathname === '/contact'}
                                className="navbar-link navbar-button"
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default NavbarBootstrap;
