import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Container } from 'react-bootstrap';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["HERNANDO LÓPEZ RINCÓN", "IT SUPPORT ANALYST", "SYSTEMS ENGINEERING STUDENT"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="hero-section">
      <Container>
        <div className="hero-content">
          <div className="hero-photo-container">
            <img src="/images/corpVers.png" alt="Hernando Lopez" className="img-fluid hero-photo" />
          </div>
          <h1 className="display-4 text-dark">
            Hi, I am
          </h1>
          <h2 className="display-2" style={{ color: 'var(--accent-blue)' }}>
            <span ref={el} />
          </h2>
        </div>
      </Container>
    </section>
  );
};

export default Hero;