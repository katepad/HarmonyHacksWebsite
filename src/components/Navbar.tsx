import { Nav } from 'react-bootstrap';

export const Navbar = () => {
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Nav.Link href="/Home">Homepage</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/About">About Us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Events">Events</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Resources">Resources</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Hackathon">Hackathons</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Contact">Contact Us</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
