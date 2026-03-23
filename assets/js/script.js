// =============================================
// MENÚ MÓVIL
// =============================================

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

// =============================================
// NAVBAR: cambio de estilo al hacer scroll
// =============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.padding = '0.6rem 2rem';
  } else {
    navbar.style.padding = '1rem 2rem';
  }
});

// =============================================
// ANIMACIÓN DE BARRAS DE PROGRESO
// Al aparecer en pantalla, las barras se animan
// =============================================

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

// =============================================
// FORMULARIO DE CONTACTO
// =============================================

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

const Form = document.getElementById('contactoForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevenir envío normal

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      // Éxito
      alert('¡Mensaje enviado correctamente! Gracias por contactarme.');
      form.reset(); // Limpiar formulario
    } else {
      // Error
      alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
    }
  } catch (error) {
    alert('Error de conexión. Verifica tu internet e intenta de nuevo.');
  }
});


// =============================================
// ANIMACIÓN DE APARICIÓN DE ELEMENTOS
// Las cards aparecen con fade-in en la pantalla
// =============================================

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

