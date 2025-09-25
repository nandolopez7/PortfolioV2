import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { projects } from '../assets/projectsData';


import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'; 


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const Projects = () => {
  return (
    <section id="projects" className="projects-section section-padding">
      <Container>
        <h2 className="section-title">Projects</h2>
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              loop={true}
              
              // 1. CONFIGURACIÓN DEL AUTOPLAY
              autoplay={{
                delay: 3200, // Tiempo en ms (3.2 segundos) entre slides
                disableOnInteraction: false, // No desactiva el autoplay al interactuar
              }}
              
              // 2. CONFIGURACIÓN DE LA PAGINACIÓN (PUNTOS DE NAVEGACIÓN)
              pagination={{ clickable: true }} // CLAVE: Permite navegar haciendo clic en los puntos
              
              // 3. ELIMINACIÓN DE LA NAVEGACIÓN: Quitamos 'navigation={true}'
              
              // 4. MÓDULOS ACTUALIZADOS: Reemplazamos Navigation por Autoplay
              modules={[EffectCoverflow, Pagination, Autoplay]} 
              
              className="mySwiper"
              speed={800} 
              breakpoints={{
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <Card className="project-card h-100 shadow-lg border-0 mb-0">
                    <Card.Img 
                      variant="top" 
                      src={project.image} 
                      alt={project.title} 
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <Card.Body className="text-center d-flex flex-column justify-content-between">
                      <Card.Title className="fs-4 fw-bold mb-2">{project.title}</Card.Title>
                      <Card.Text className="text-muted">{project.description}</Card.Text>
                      
                      {/* Iconos de Tecnologías */}
                      <div className="d-flex justify-content-center my-3">
                        {project.technologies.map((icon, i) => (
                          <FontAwesomeIcon 
                            key={i} 
                            icon={icon} 
                            size="2x" 
                            className="mx-2" 
                            style={{ color: 'var(--accent-blue)' }} 
                          />
                        ))}
                      </div>

                      {/* Botones de Enlaces */}
                      <div className="d-flex justify-content-center gap-3">
                        <Button href={project.liveLink} target="_blank" variant="primary">
                          View Project
                        </Button>
                        <Button href={project.repoLink} target="_blank" variant="secondary" className="d-flex align-items-center">
                          <FontAwesomeIcon icon={faGithub} className="me-2" /> Repo
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;