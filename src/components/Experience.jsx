import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const workExperience = [
  { company: "Amazon", role: "Customer Service Associate", location: "Cali, Colombia", dates: "Aug 2023 - Present", tasks: ["Resolved technical issues including account access and tool errors in a high-volume environment.", "Documented incidents in ticketing systems, ensuring accuracy and follow-up.", "Balanced productivity and quality, achieving consistent SLA compliance and customer satisfaction."] },
  { company: "Amazon", role: "Acting Team Manager", location: "Cali, Colombia", dates: "Dec 2024 - Mar 2025", tasks: ["Led a team of 20+ associates to improve resolution rates by 12%.", "Monitored KPIs, implemented process improvements, and provided coaching based on performance data.", "Fostered operational excellence and collaboration."] },
  { company: "Sitel Group", role: "Team Coach / Customer Service Agent", location: "Cali, Colombia", dates: "Oct 2019 - Aug 2022", tasks: ["Supported customers with financial service inquiries and technical issues.", "Coached 15+ agents in troubleshooting, data accuracy, and compliance.", "Improved team CSAT by 10% through effective guidance and workflow optimization."] },
  { company: "Teleperformance", role: "Interpreter", location: "Cali, Colombia", dates: "Oct 2022 - May 2023", tasks: ["Assisted healthcare, emergency, and social service providers with real-time communication.", "Strengthened ability to remain precise and calm under pressure while handling critical cases."] },
  { company: "Independent", role: "Freelance IT Technician", location: "Cali, Colombia", dates: "2017 - Present", tasks: ["Provided maintenance and repair services for PCs and laptops, including OS installation, hardware upgrades, and software troubleshooting.", "Delivered remote support with TeamViewer/AnyDesk, achieving a 95% resolution rate on first session.", "Supported individuals and small businesses by reducing downtime and improving system performance."] },
];

const education = [
  { school: "Universidad del Valle", location: "Cali, Colombia", degree: "Systems Engineering", dates: "2020 - Present" },
  { school: "SENA", location: "Colombia", degree: "Técnico en Sistemas", dates: "2016-2017" },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section section-padding">
      <Container>
        <h2 className="section-title">Experience & Education</h2>
        <Row className="justify-content-center">
          <Col md={10}>
            <Row>
              <Col md={6} className="mb-4 mb-md-0">
                <h3 className="mb-4">Work Experience</h3>
                {workExperience.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <h4>{exp.role} at {exp.company}</h4>
                    <p className="text-muted">{exp.location} | {exp.dates}</p>
                    <ul>
                      {exp.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Col>
              <Col md={6}>
                <h3 className="mb-4">Education</h3>
                {education.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <h4>{edu.school}</h4>
                    <p className="text-muted">{edu.location} | {edu.dates}</p>
                    <p>{edu.degree}</p>
                  </div>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;