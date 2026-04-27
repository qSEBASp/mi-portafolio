/**
 * Portfolio qSEBASp - JavaScript
 * Animaciones y funcionalidades del portafolio
 */

(function() {
  'use strict';

  // ===============================================
  // ANIMACIÓN DE APARICIÓN AL HACER SCROLL
  // ===============================================
  const fadeInSections = () => {
    const sections = document.querySelectorAll('.seccion');
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    sections.forEach(section => {
      section.classList.add('fade-in-section');
      observer.observe(section);
    });

    addFadeInStyles();
  };

  // ===============================================
  // ESTILOS DINÁMICOS PARA FADE-IN
  // ===============================================
  const addFadeInStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      .fade-in-section {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      }
      .fade-in-section.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
  };

  // ===============================================
  // SUAVIZAR SCROLL EN NAVEGACIÓN
  // ===============================================
  const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  };

  // ===============================================
  // INICIALIZAR CUANDO DOM ESTÉ LISTO
  // ===============================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      fadeInSections();
      smoothScroll();
    });
  } else {
    fadeInSections();
    smoothScroll();
  }

})();