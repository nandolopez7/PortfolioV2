import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { technicalProjects } from '../assets/technicalProjectsData';

const TechnicalProjects = () => {
  return (
    <section id="technical-projects" className="projects-section section-padding">
      <Container>
        <h2 className="section-title">Technical Projects</h2>
        <Row className="g-4 justify-content-center">
          {technicalProjects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="project-card h-100">
                <Card.Body className="text-center d-flex flex-column justify-content-between">
                  <div>
                    <FontAwesomeIcon icon={project.icon} size="4x" className="mb-3" style={{ color: 'var(--accent-blue)' }} />
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </div>
                  <Card.Footer className="border-0 bg-transparent">
                    <h5 className="mb-2">Technologies used</h5>
                    <div className="d-flex justify-content-center">
                      {project.technologies.map((icon, i) => (
                        <FontAwesomeIcon key={i} icon={icon} size="2x" className="mx-2" style={{ color: 'var(--accent-blue)' }} />
                      ))}
                    </div>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TechnicalProjects;