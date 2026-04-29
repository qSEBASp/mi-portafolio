/**
 * Portfolio qSEBASp - JavaScript
 * Animaciones y funcionalidades del portafolio
 */

(function() {
  'use strict';

  // ===============================================
  // FONDO REACTIVO AL MOUSE (SMOOTH LERP)
  // ===============================================
  const initMouseBackground = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    
    // Posiciones actuales y objetivos para interpolación
    let currentX = 50, currentY = 50;
    let targetX = 50, targetY = 50;
    let currentX2 = 50, currentY2 = 50;
    let targetX2 = 50, targetY2 = 50;
    let isMoving = false;
    let timeout;

    // Función de interpolación lineal (lerp)
    const lerp = (start, end, factor) => start + (end - start) * factor;

    // Actualizar posición del mouse
    const updateMouseTarget = (e) => {
      targetX = (e.clientX / window.innerWidth) * 100;
      targetY = (e.clientY / window.innerHeight) * 100;
      // Segunda capa con movimiento más lento (parallax)
      targetX2 = (e.clientX / window.innerWidth) * 100;
      targetY2 = (e.clientY / window.innerHeight) * 100;
      
      isMoving = true;
      clearTimeout(timeout);
      timeout = setTimeout(() => { isMoving = false; }, 150);
    };

    // Animación suave con requestAnimationFrame
    const animate = () => {
      // Capa principal: movimiento rápido (lerp 0.1)
      currentX = lerp(currentX, targetX, 0.1);
      currentY = lerp(currentY, targetY, 0.1);
      
      // Capa secundaria: movimiento lento para parallax (lerp 0.05)
      currentX2 = lerp(currentX2, targetX2, 0.05);
      currentY2 = lerp(currentY2, targetY2, 0.05);
      
      // Aplicar variables CSS
      root.style.setProperty('--mouse-x', currentX + '%');
      root.style.setProperty('--mouse-y', currentY + '%');
      root.style.setProperty('--mouse-x2', currentX2 + '%');
      root.style.setProperty('--mouse-y2', currentY2 + '%');
      
      // Ajustar intensidad basada en movimiento
      const intensity = isMoving ? 1 : 0.6;
      root.style.setProperty('--glow-intensity', intensity);
      
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', updateMouseTarget, { passive: true });
    
    // Fallback táctil para móviles
    document.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        targetX = (touch.clientX / window.innerWidth) * 100;
        targetY = (touch.clientY / window.innerHeight) * 100;
        targetX2 = targetX;
        targetY2 = targetY;
      }
    }, { passive: true });

    // Iniciar animación
    animate();
  };

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
      initMouseBackground();
      fadeInSections();
      smoothScroll();
    });
  } else {
    initMouseBackground();
    fadeInSections();
    smoothScroll();
  }

})();