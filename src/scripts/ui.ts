/**
 * Interacciones del sitio. Todo progressive enhancement:
 * sin JS, el contenido y los enlaces siguen funcionando.
 */

const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Foco que sigue al cursor, con apagado automático al estar quieto. */
export function initSpotlight() {
  const el = document.querySelector<HTMLElement>('.spotlight');
  if (!el || reduceMotion() || matchMedia('(hover: none)').matches) return;

  let frame = 0;
  let x = 50;
  let y = 30;
  let idleTimer = 0;

  const paint = () => {
    frame = 0;
    el.style.setProperty('--mx', `${x}%`);
    el.style.setProperty('--my', `${y}%`);
  };

  window.addEventListener(
    'pointermove',
    (event) => {
      x = (event.clientX / window.innerWidth) * 100;
      y = (event.clientY / window.innerHeight) * 100;
      if (!frame) frame = requestAnimationFrame(paint);
      el.classList.add('is-on');
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => el.classList.remove('is-on'), 1600);
    },
    { passive: true }
  );
}

/* Aparición de bloques al entrar en pantalla. */
export function initReveal() {
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!items.length) return;

  if (reduceMotion() || !('requestAnimationFrame' in window)) {
    items.forEach((item) => item.classList.add('is-in'));
    return;
  }

  let frame = 0;

  // Barrido por scroll: revela lo que entra en pantalla y también lo que se
  // saltó al navegar con un ancla (el observer por sí solo lo dejaría oculto).
  const sweep = () => {
    frame = 0;
    const limit = window.innerHeight * 0.94;
    items.forEach((item) => {
      if (item.classList.contains('is-in')) return;
      if (item.getBoundingClientRect().top < limit) item.classList.add('is-in');
    });
  };

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(sweep);
  };

  sweep();
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('hashchange', schedule);
}

/* Marca el enlace de la sección visible. */
export function initScrollSpy() {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav]'));
  if (sections.length < 2 || !links.length || !('IntersectionObserver' in window)) return;

  const setActive = (id: string) => {
    links.forEach((link) => {
      const active = link.dataset.nav === id;
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-42% 0px -52% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
  setActive(sections[0].id);
}

/* Hora local de Bogotá, sin dependencias. */
export function initLocalTime() {
  const nodes = document.querySelectorAll<HTMLTimeElement>('[data-local-time]');
  if (!nodes.length) return;

  const locale = document.documentElement.lang === 'en' ? 'en-US' : 'es-CO';
  const format = new Intl.DateTimeFormat(locale, {
    timeZone: 'America/Bogota',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const tick = () => {
    const now = format.format(new Date());
    nodes.forEach((node) => {
      node.textContent = now;
      node.setAttribute('datetime', new Date().toISOString());
    });
  };

  tick();
  window.setInterval(tick, 30_000);
}

/* Atajo de teclado visible según el sistema. */
export function initShortcutLabel() {
  const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  document.querySelectorAll<HTMLElement>('[data-kbd]').forEach((node) => {
    node.textContent = isMac ? '⌘K' : 'Ctrl K';
  });
}

/* Toast efímero para confirmar acciones. */
export function toast(message: string) {
  let node = document.querySelector<HTMLElement>('.toast');
  if (!node) {
    node = document.createElement('div');
    node.className = 'toast';
    node.setAttribute('role', 'status');
    node.setAttribute('aria-live', 'polite');
    document.body.appendChild(node);
  }
  node.textContent = message;
  node.classList.remove('is-visible');
  // fuerza reflow para reiniciar la transición
  void node.offsetWidth;
  node.classList.add('is-visible');
  window.setTimeout(() => node.classList.remove('is-visible'), 1800);
}

async function copyText(text: string, message: string) {
  try {
    await navigator.clipboard.writeText(text);
    toast(message);
  } catch {
    window.location.href = `mailto:${text}`;
  }
}

/* Botones de copiar (correo y teléfono). */
export function initCopy() {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.dataset.copy ?? '';
      const message = button.dataset.copyLabel ?? 'Copiado';
      if (value.includes('@')) void copyText(value, message);
      else void copyText(value.replace(/[^\d+]/g, ''), message);
    });
  });
}

/* Casos de estudio: <dialog> nativo + cierre por backdrop. */
export function initCaseDialogs() {
  const dialogs = Array.from(document.querySelectorAll<HTMLDialogElement>('dialog.sheet'));

  const open = (id: string) => {
    const dialog = document.getElementById(id) as HTMLDialogElement | null;
    if (dialog) dialog.showModal();
  };

  document.querySelectorAll<HTMLElement>('[data-open-case]').forEach((trigger) => {
    trigger.addEventListener('click', () => open(`case-${trigger.dataset.openCase}`));
  });

  dialogs.forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.querySelectorAll<HTMLElement>('[data-close-dialog]').forEach((button) => {
      button.addEventListener('click', () => dialog.close());
    });
  });
}

/* Menú móvil. */
export function initMenu() {
  const dialog = document.getElementById('drawer') as HTMLDialogElement | null;
  if (!dialog) return;

  document.querySelectorAll<HTMLElement>('[data-menu-open]').forEach((trigger) => {
    trigger.addEventListener('click', () => dialog.showModal());
  });

  dialog.querySelectorAll<HTMLElement>('[data-menu-close]').forEach((button) => {
    button.addEventListener('click', () => dialog.close());
  });

  dialog.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
    link.addEventListener('click', () => dialog.close());
  });
}

/* Paleta de comandos. */
export function initPalette() {
  const dialog = document.getElementById('palette') as HTMLDialogElement | null;
  if (!dialog) return;

  const input = dialog.querySelector<HTMLInputElement>('[data-palette-input]');
  const list = dialog.querySelector<HTMLElement>('[data-palette-list]');
  const empty = dialog.querySelector<HTMLElement>('[data-palette-empty]');
  if (!input || !list || !empty) return;

  const items = () => Array.from(list.querySelectorAll<HTMLElement>('[data-palette-item]'));
  let index = 0;

  const select = (next: number) => {
    const all = items().filter((item) => !item.hidden);
    if (!all.length) return;
    index = (next + all.length) % all.length;
    all.forEach((item, i) => item.setAttribute('aria-selected', String(i === index)));
    all[index].scrollIntoView({ block: 'nearest' });
  };

  const filter = () => {
    const term = input.value.trim().toLowerCase();
    items().forEach((item) => {
      const haystack = `${item.dataset.search ?? ''} ${item.textContent ?? ''}`.toLowerCase();
      item.hidden = term !== '' && !haystack.includes(term);
    });
    const visible = items().filter((item) => !item.hidden);
    list.querySelectorAll<HTMLElement>('[data-palette-group]').forEach((group) => {
      const children = Array.from(group.querySelectorAll<HTMLElement>('[data-palette-item]'));
      group.hidden = children.every((child) => child.hidden);
    });
    empty.hidden = visible.length > 0;
    index = 0;
    select(0);
  };

  const open = () => {
    dialog.showModal();
    input.value = '';
    filter();
    window.setTimeout(() => input.focus(), 30);
  };

  const openCase = (slug: string) => {
    dialog.close();
    const target = document.getElementById(`case-${slug}`) as HTMLDialogElement | null;
    target?.showModal();
  };

  document.querySelectorAll<HTMLElement>('[data-palette-open]').forEach((trigger) => {
    trigger.addEventListener('click', open);
  });

  input.addEventListener('input', filter);

  input.addEventListener('keydown', (event) => {
    const all = items().filter((item) => !item.hidden);
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      select(index + 1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      select(index - 1);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      all[index]?.click();
    }
  });

  items().forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const all = items().filter((entry) => !entry.hidden);
      index = Math.max(0, all.indexOf(item));
      all.forEach((entry, i) => entry.setAttribute('aria-selected', String(i === index)));
    });
    item.addEventListener('click', () => {
      const slug = item.dataset.openCase;
      if (slug) {
        openCase(slug);
        return;
      }
      // El resto de acciones (copiar, navegar, idioma) cierran la paleta.
      dialog.close();
    });
  });

  document.addEventListener('keydown', (event) => {
    const isK = event.key.toLowerCase() === 'k';
    if (isK && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      if (dialog.open) dialog.close();
      else open();
    } else if (event.key === '/' && !dialog.open) {
      const tag = (document.activeElement?.tagName ?? '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;
      event.preventDefault();
      open();
    }
  });
}

/* Enlaces de idioma: conservan la sección actual. */
export function initLangSwitch() {
  document.querySelectorAll<HTMLAnchorElement>('[data-lang-switch]').forEach((link) => {
    link.addEventListener('click', () => {
      try {
        sessionStorage.setItem('lang-picked', link.dataset.langSwitch ?? '');
        if (window.location.hash) link.href += window.location.hash;
      } catch {
        /* modo privado: se ignora */
      }
    });
  });
}
