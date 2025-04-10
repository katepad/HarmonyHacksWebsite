import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const AdminNavbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <Nav 
      className="flex-column p-3"
      style={{ 
        backgroundColor: '#A52B93', 
        minHeight: '100vh',
        width: '250px',
        position: 'fixed',
        left: 0,
        top: 0
      }}
    >
      <h3 className="text-white mb-4 px-3">Admin Panel</h3>
      
      {/* Dashboard/Home */}
      <Nav.Link 
        as={Link} 
        to="/admin" 
        className="text-white mb-2"
      >
        Dashboard
      </Nav.Link>

      <Nav.Link 
        as={Link} 
        to="/admin/home" 
        className="text-white mb-2"
      >
        Home
      </Nav.Link>

      {/* Resources */}
      <Nav.Link 
        as={Link} 
        to="/admin/resources" 
        className="text-white mb-2"
      >
        Resources
      </Nav.Link>
      
      {/* Events */}
      <Nav.Link 
        as={Link} 
        to="/admin/events" 
        className="text-white mb-2"
      >
        Events
      </Nav.Link>

      {/* Contact Us */}
      <Nav.Link 
        as={Link} 
        to="/admin/contact" 
        className="text-white mb-2"
      >
        Contact
      </Nav.Link>

      {/* Music */}

      <Nav.Link 
        as={Link} 
        to="/admin/music" 
        className="text-white mb-2"
      >
        Music
      </Nav.Link>

      {/* About Us */}
      <Nav.Link 
        as={Link} 
        to="/admin/about" 
        className="text-white mb-2"
      >
        About Us
      </Nav.Link>

      <Button 
        variant="outline-light" 
        onClick={handleLogout}
        className="mt-auto"
      >
        Logout
      </Button>
    </Nav>
  );
};

export default AdminNavbar; 