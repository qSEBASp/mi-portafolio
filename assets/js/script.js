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
  // FILAS INFINITAS DE HABILIDADES
  // ===============================================
  const initSkillsMarquee = () => {
    const wrapper = document.querySelector('.skills-marquees');
    if (!wrapper) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const noHover = window.matchMedia('(hover: none)');
    const staticMode = reduceMotion.matches || noHover.matches;

    const SPEED = 18;           // px/s de desplazamiento automático
    const RAMP = 0.4;           // s para arrancar hasta la velocidad objetivo
    const STOP_RAMP = 0.12;     // s para frenar (pausa casi inmediata)
    const HOVER_DELAY = 150;    // ms de reposo antes de aceptar la rueda
    const RESUME_DELAY = 5000;  // ms sin interacción antes de reanudar
    const KEY_STEP = 60;        // px por pulsación de flecha

    const rows = Array.from(wrapper.querySelectorAll('.marquee-row')).map(row => ({
      row: row,
      viewport: row.querySelector('.marquee-viewport'),
      track: row.querySelector('.marquee-track'),
      seq: row.querySelector('.marquee-seq'),
      dir: Number(row.dataset.direction) || 1,
      offset: 0,
      speed: 0,
      seqWidth: 0,
      hold: false,
      hoverAt: 0,
      resumeAt: 0,
      resumeTimer: 0,
      scrubTimer: 0
    })).filter(r => r.viewport && r.track && r.seq);

    const toggle = wrapper.parentElement.querySelector('.skills-toggle');

    if (!rows.length) return;

    // Sin animación: móvil táctil o prefers-reduced-motion → scroll nativo
    if (staticMode) {
      wrapper.classList.add('is-static');
      if (toggle) toggle.hidden = true;
      return;
    }

    let rafId = 0;
    let last = 0;
    let paused = false;
    let sectionVisible = true;

    // Posición visual de la fila a partir del desplazamiento acumulado
    const applyTransform = (r) => {
      if (!r.seqWidth) return;
      const phase = ((r.offset % r.seqWidth) + r.seqWidth) % r.seqWidth;
      const x = r.dir < 0 ? -phase : phase - r.seqWidth;
      r.track.style.transform = 'translate3d(' + x.toFixed(2) + 'px, 0, 0)';
    };

    // Clona la secuencia las veces necesarias para cubrir el ancho visible
    const measure = () => {
      rows.forEach(r => {
        r.track.querySelectorAll('.marquee-seq[aria-hidden="true"]').forEach(node => node.remove());
        r.seqWidth = r.seq.getBoundingClientRect().width;
        if (!r.seqWidth) return;

        const viewportWidth = r.viewport.clientWidth;
        let total = r.seqWidth;
        while (total < viewportWidth + r.seqWidth) {
          const clone = r.seq.cloneNode(true);
          clone.setAttribute('aria-hidden', 'true');
          r.track.appendChild(clone);
          total += r.seqWidth;
        }
        applyTransform(r);
      });
    };

    const stop = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
      last = 0;
    };

    const step = (now) => {
      rafId = 0;
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 1 / 60;
      last = now;

      let running = false;

      rows.forEach(r => {
        const want = (paused || r.hold || now < r.resumeAt) ? 0 : SPEED;
        if (want) running = true;

        r.speed += (want - r.speed) * Math.min(1, dt / (want ? RAMP : STOP_RAMP));
        if (!want && r.speed < 0.5) r.speed = 0;
        if (r.speed) {
          r.offset += r.speed * dt;
          applyTransform(r);
          running = true;
        }
      });

      if (running) rafId = requestAnimationFrame(step);
      else last = 0;
    };

    const start = () => {
      if (rafId || paused || !sectionVisible || document.hidden) return;
      rafId = requestAnimationFrame(step);
    };

    // Reanudación diferida: no arrancar hasta que pasen los 5s
    const scheduleResume = (r) => {
      clearTimeout(r.resumeTimer);
      const wait = r.resumeAt - performance.now();
      if (wait > 0) {
        r.resumeTimer = setTimeout(start, wait + 30);
      } else {
        start();
      }
    };

    const scrub = (r, delta) => {
      r.speed = 0;
      r.offset += delta;
      r.resumeAt = performance.now() + RESUME_DELAY;
      r.row.classList.add('is-scrubbing');
      clearTimeout(r.scrubTimer);
      r.scrubTimer = setTimeout(() => r.row.classList.remove('is-scrubbing'), 600);
      applyTransform(r);
    };

    rows.forEach(r => {
      // El cursor frena la fila para poder leerla
      r.row.addEventListener('mouseenter', () => {
        r.hold = true;
        r.hoverAt = performance.now();
      });

      r.row.addEventListener('mouseleave', () => {
        r.hold = false;
        clearTimeout(r.scrubTimer);
        r.row.classList.remove('is-scrubbing');
        scheduleResume(r);
      });

      // Rueda del ratón: toma el control de esa fila
      r.viewport.addEventListener('wheel', (e) => {
        if (performance.now() - r.hoverAt < HOVER_DELAY) return;
        const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? r.viewport.clientWidth : 1;
        const delta = e.deltaY * unit;
        if (!delta) return;
        e.preventDefault();
        r.hold = true;
        scrub(r, delta);
      }, { passive: false });

      // Teclado: flechas para recorrer la fila con el foco puesto
      r.row.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        e.preventDefault();
        const forward = e.key === 'ArrowRight' ? 1 : -1;
        scrub(r, (r.dir < 0 ? -forward : forward) * KEY_STEP);
        r.resumeAt = performance.now();
      });

      r.row.addEventListener('focus', () => {
        r.hold = true;
        r.hoverAt = performance.now();
      });

      r.row.addEventListener('blur', () => {
        r.hold = false;
        scheduleResume(r);
      });
    });

    // Botón Pausar / Reanudar
    if (toggle) {
      const label = toggle.querySelector('.skills-toggle-label');
      toggle.addEventListener('click', () => {
        paused = !paused;
        toggle.setAttribute('aria-pressed', String(paused));
        if (label) label.textContent = paused ? 'Reanudar' : 'Pausar';
        if (!paused) start();
      });
    }

    // Re-medir cuando cambie el ancho o carguen las fuentes
    let resizeTimer = 0;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(measure, 150);
    });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure);
    }

    // Pausar con la pestaña oculta
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else start();
    });

    // Solo animar mientras la sección está en pantalla
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        sectionVisible = entries[0].isIntersecting;
        if (sectionVisible) start();
        else stop();
      }, { threshold: 0 }).observe(wrapper);
    }

    measure();
    wrapper.classList.add('is-animated');
    start();
  };

  // ===============================================
  // INICIALIZAR CUANDO DOM ESTÉ LISTO
  // ===============================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initMouseBackground();
      fadeInSections();
      smoothScroll();
      initSkillsMarquee();
    });
  } else {
    initMouseBackground();
    fadeInSections();
    smoothScroll();
    initSkillsMarquee();
  }

})();