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

      {/* Gallery */}
      <Nav.Link 
        as={Link} 
        to="/admin/home" 
        className="text-white mb-2"
      >
        Gallery
      </Nav.Link>

      {/* Current Board */}
      <Nav.Link 
        as={Link} 
        to="/admin/about" 
        className="text-white mb-2"
      >
        Current Board
      </Nav.Link>
      
      {/* Events */}
      <Nav.Link 
        as={Link} 
        to="/admin/events" 
        className="text-white mb-2"
      >
        Events
      </Nav.Link>

      {/* Resources */}
      <Nav.Link 
        as={Link} 
        to="/admin/resources" 
        className="text-white mb-2"
      >
        Resources
      </Nav.Link>

      {/* Member Testimonials */}
      <Nav.Link 
        as={Link} 
        to="/admin/contact" 
        className="text-white mb-2"
      >
        Member Testimonials
      </Nav.Link>

      {/* Music */}

      <Nav.Link 
        as={Link} 
        to="/admin/music" 
        className="text-white mb-2"
      >
        Music
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