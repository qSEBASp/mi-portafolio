// q=============================================
// MENÚ MÓVIL
// =============================================p
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('activo');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(enlace => {
  enlace.addEventListener('click', () => {
    navLinks.classList.remove('activo');
  });
});

// q=============================================
// NAVBAR: cambio de estilo al hacer scroll
// =============================================p
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.padding = '0.6rem 2rem';
  } else {
    navbar.style.padding = '1rem 2rem';
  }
});

// q=============================================
// ANIMACIÓN DE BARRAS DE PROGRESO
// Al aparecer en pantalla, las barras se animan
// =============================================p
const barras = document.querySelectorAll('.barra-relleno');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      // La barra ya tiene su ancho definido en el HTML con style="width: X%"
      // El CSS hace la transición automáticamente
      entrada.target.style.width = entrada.target.style.width;
    }
  });
}, { threshold: 0.3 });

barras.forEach(barra => observador.observe(barra));

// q=============================================
// FORMULARIO DE CONTACTO
// =============================================p
const form = document.getElementById('contactoForm');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que la página se recargue

  const nombre = form.querySelector('input[type="text"]').value;

  // Mensaje de confirmación temporal
  const boton = form.querySelector('button[type="submit"]');
  const textoOriginal = boton.textContent;

  boton.textContent = `¡Gracias, ${nombre}! Mensaje enviado ✓`;
  boton.disabled = true;
  boton.style.backgroundColor = '#2ecc71';

  setTimeout(() => {
    boton.textContent = textoOriginal;
    boton.disabled = false;
    boton.style.backgroundColor = '';
    form.reset();
  }, 3000);
});

// q=============================================
// ANIMACIÓN DE APARICIÓN DE ELEMENTOS
// Las cards aparecen con fade-in al entrar en pantalla
// =============================================p
const elementosAnimados = document.querySelectorAll(
  '.habilidad-card, .proyecto-card, .sobre-mi-grid, .contacto-grid'
);

const estiloAnimacion = document.createElement('style');
estiloAnimacion.textContent = `
  .animacion-entrada {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .animacion-entrada.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(estiloAnimacion);

elementosAnimados.forEach(el => el.classList.add('animacion-entrada'));

const observadorEntrada = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

elementosAnimados.forEach(el => observadorEntrada.observe(el));
