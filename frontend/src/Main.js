import React, { useState, useEffect, useRef } from 'react';
import Swiper from 'swiper';
import './vendor/swiper/swiper-bundle.min.css';
import AOS from 'aos';
import './vendor/aos/aos.css';

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);
  const scrollTopRef = useRef(null);
  const headerRef = useRef(null);

  // Scroll Handling
  useEffect(() => {
    const toggleScrolled = () => {
      if (!headerRef.current) return;
      const selectBody = document.querySelector('body');
      const selectHeader = headerRef.current;
      if (!selectHeader.classList.contains('scroll-up-sticky') &&
          !selectHeader.classList.contains('sticky-top') &&
          !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    };

    window.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    return () => {
      window.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
    };
  }, []);

  // Mobile Navigation Toggle
  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  // Scroll Top Button
  useEffect(() => {
    const toggleScrollTop = () => {
      if (scrollTopRef.current) {
        window.scrollY > 100 ? scrollTopRef.current.classList.add('active') : scrollTopRef.current.classList.remove('active');
      }
    };

    window.addEventListener('scroll', toggleScrollTop);
    return () => window.removeEventListener('scroll', toggleScrollTop);
  }, []);

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  // Swiper Initialization
  useEffect(() => {
    new Swiper('.swiper-container', {
      // Swiper settings
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
    });
  }, []);

  // Preloader Handling
  useEffect(() => {
    window.addEventListener('load', () => setIsLoaded(true));
    return () => window.removeEventListener('load', () => setIsLoaded(true));
  }, []);

  return (
    <div>
      {/* Preloader */}
      {!isLoaded && <div id="preloader">Loading...</div>}

      {/* Header */}
      <header id="header" ref={headerRef}>
        <nav>
          <button onClick={toggleNav} className={`mobile-nav-toggle ${isNavActive ? 'bi-x' : 'bi-list'}`}>
            {/* Mobile nav icon */}
          </button>
          <div className={`mobile-nav ${isNavActive ? 'mobile-nav-active' : ''}`}>
            {/* Mobile navigation links */}
          </div>
        </nav>
      </header>

      {/* Scroll Top Button */}
      <button ref={scrollTopRef} className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Scroll to Top
      </button>

      {/* Swiper Component */}
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {/* Slides go here */}
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
        </div>
      </div>

      {/* AOS Example Section */}
      <section data-aos="fade-up">
        <h2>AOS Animation</h2>
        <p>This section will fade in on scroll.</p>
      </section>

      {/* Example FAQ */}
      <div className="faq-item">
        <h3 onClick={() => alert('Toggled FAQ')}>FAQ Question</h3>
        <div className="faq-answer">
          <p>FAQ Answer</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
