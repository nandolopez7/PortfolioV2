import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faGlobe, faUserShield, faProjectDiagram, faDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about" className="bio-section section-padding">
      <Container>
        <h2 className="section-title">About Me</h2>
        <Row className="justify-content-center">
          <Col lg={10}>
            <p className="text-center">
              Systems Engineering student and freelance IT technician with 7+ years of experience in computer maintenance, troubleshooting, and remote support. Skilled in Windows/Linux environments, networking fundamentals, and help desk operations. Proven track record of resolving issues efficiently, improving workflows, and supporting end-users with empathy and clarity. Currently enhancing expertise with Cisco CCNA and AWS Cloud Practitioner certifications.
            </p>
          </Col>
        </Row>
        <Row className="mt-5 text-center-responsive justify-content-center">
          <Col lg={4} className="mb-4 mb-lg-0">
            <h3 className="mb-3">Technical Skills</h3>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <FontAwesomeIcon icon={faLaptopCode} className="me-2" />
                <strong>Operating Systems:</strong> Windows, Linux (basic admin & troubleshooting)
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faProjectDiagram} className="me-2" />
                <strong>Networking:</strong> TCP/IP, DNS, DHCP, VPN
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faUserShield} className="me-2" />
                <strong>Help Desk:</strong> Incident management, Jira, ServiceNow, user account setup
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faGlobe} className="me-2" />
                <strong>Programming:</strong> HTML, CSS, JavaScript
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={4} className="mb-4 mb-lg-0">
            <h3 className="mb-3">Certifications</h3>
            <ListGroup variant="flush">
              <ListGroup.Item>EF SET English Certificate (C2 Proficient)</ListGroup.Item>
              <ListGroup.Item>Basic IT Tools (SENA)</ListGroup.Item>
              <ListGroup.Item>Cisco CCNA: Introduction to Networks (in progress)</ListGroup.Item>
              <ListGroup.Item>AWS Cloud Practitioner (in progress)</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row className="mt-4 justify-content-center">
          <Col xs="auto" className="d-flex flex-column flex-md-row">
            <a href="/pdfs/CV-Latex.pdf" download className="btn btn-outline-primary">
                Download CV (EN) <FontAwesomeIcon icon={faDownload} />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;