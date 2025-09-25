import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { projects } from '../assets/projectsData';

const Projects = () => {
  return (
    <section id="projects" className="projects-section section-padding">
      <Container>
        <h2 className="section-title">Projects</h2>
        <Row className="g-4 justify-content-center">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="project-card h-100">
                <Card.Img variant="top" src={project.image} alt={project.title} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="d-flex justify-content-center mb-3">
                    {project.technologies.map((icon, i) => (
                      <FontAwesomeIcon key={i} icon={icon} size="2x" className="mx-2" style={{ color: 'var(--accent-blue)' }} />
                    ))}
                  </div>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  <Button href={project.liveLink} target="_blank" variant="primary">
                    View Project
                  </Button>
                  <Button href={project.repoLink} target="_blank" variant="secondary">
                    <FontAwesomeIcon icon={faGithub} /> Repository
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;