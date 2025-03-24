import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AdminNavbar from './components/AdminNavbar';

const AdminDashboard: React.FC = () => {
  return (
    <div className="d-flex">
      <AdminNavbar />
      <Container 
        className="p-4" 
        style={{ marginLeft: '250px' }}
      >
        <h2 className="mb-4">Dashboard</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Manage Resources</Card.Title>
                <Card.Text>
                  Add, edit, or remove resources from the website.
                </Card.Text>
                <Button 
                  variant="primary" 
                  className="w-100"
                  style={{ backgroundColor: '#A52B93', borderColor: '#A52B93' }}
                >
                  Edit Resources
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Manage Events</Card.Title>
                <Card.Text>
                  Create and manage upcoming events.
                </Card.Text>
                <Button 
                  variant="primary" 
                  className="w-100"
                  style={{ backgroundColor: '#A52B93', borderColor: '#A52B93' }}
                >
                  Edit Events
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>User Messages</Card.Title>
                <Card.Text>
                  View and respond to user messages.
                </Card.Text>
                <Button 
                  variant="primary" 
                  className="w-100"
                  style={{ backgroundColor: '#A52B93', borderColor: '#A52B93' }}
                >
                  View Messages
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminDashboard;
