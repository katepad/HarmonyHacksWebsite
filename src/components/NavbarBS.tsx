import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/Global.css'; 

export const NavbarBootstrap = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

        useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }; 

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); 


    return (
        <Navbar className={`custom-navbar ${scrolled ? "scrolled" : ""} sticky-top`} variant="dark" expand="lg">
            <Container>
                <div className="logo" />
                <Navbar.Brand as={Link} to="/" className="navbar-brand">
                    HARMONY HACKS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link 
                            as={Link} 
                            to="/about" 
                            active={location.pathname === '/about'}
                            className={"navbar-link navbar-button"}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/events" 
                            active={location.pathname === '/events'}
                            className={"navbar-link navbar-button"}
                        >
                            Events
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/resources" 
                            active={location.pathname === '/resources'}
                            className={"navbar-link navbar-button"}
                        >
                            Resources
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/contact" 
                            active={location.pathname === '/contact'}
                            className={"navbar-link navbar-button"}
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
