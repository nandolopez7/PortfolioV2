import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="contact-section section-padding">
      <Container>
        <h2 className="section-title">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="text-center">
              Here you can check all my social networks and an easy way to
              contact me!
            </p>
            <Form
              className="mb-4"
              action="https://formspree.io/f/mrbybpkw"
              method="POST"
            >
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Your message here"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/hernando-lopez-rincon-9b9300251/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon mx-3"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
              <a
                href="https://github.com/nandolopez7/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon mx-3"
              >
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
              <a
                href="https://twitter.com/7_hernando"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon mx-3"
              >
                <FontAwesomeIcon icon={faTwitter} size="3x" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
