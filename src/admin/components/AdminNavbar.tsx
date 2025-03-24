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
      <Nav.Link 
        as={Link} 
        to="/admin/dashboard" 
        className="text-white mb-2"
      >
        Dashboard
      </Nav.Link>
      <Nav.Link 
        as={Link} 
        to="/admin/resources" 
        className="text-white mb-2"
      >
        Resources
      </Nav.Link>
      <Nav.Link 
        as={Link} 
        to="/admin/events" 
        className="text-white mb-2"
      >
        Events
      </Nav.Link>
      <Nav.Link 
        as={Link} 
        to="/admin/messages" 
        className="text-white mb-2"
      >
        Messages
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