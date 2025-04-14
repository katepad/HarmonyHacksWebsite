import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container className="p-4">
      <h2 className = "page-h2 color-purple">Manage Board Members</h2> ;
      <Row className="g-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Resources</Card.Title>
              <Card.Text>
                Manage website resources and content.
              </Card.Text>
              <Button 
                variant="primary" 
                className="w-100"
                style={{ backgroundColor: '#A52B93', borderColor: '#A52B93' }}
                onClick={() => navigate('/admin/resources')}
              >
                Manage Resources
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Upcoming Events</Card.Title>
              <Card.Text>
                Manage upcoming events and schedules.
              </Card.Text>
              <Button 
                variant="primary" 
                className="w-100"
                style={{ backgroundColor: '#A52B93', borderColor: '#A52B93' }}
                onClick={() => navigate('/admin/upcomingEvents')}
              >
                Manage Events
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Board Members</Card.Title>
              <Card.Text>
                Manage the current board members.
              </Card.Text>
              <Button 
                variant="primary" 
                className="w-100"
                style={{ backgroundColor: '#A52B93', borderColor: '#A52B93' }}
                onClick={() => navigate('/admin/board')}
              >
                Manage Content
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
