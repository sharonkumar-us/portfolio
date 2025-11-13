// Basic interactivity: form handling, theme toggle, current year
document.addEventListener('DOMContentLoaded', () => {
  // Set year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme toggle (persist in localStorage)
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const stored = localStorage.getItem('theme') || 'dark';
  setTheme(stored);

  themeToggle && themeToggle.addEventListener('click', () => {
    const current = localStorage.getItem('theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  function setTheme(name) {
    if (name === 'light') {
      root.style.setProperty('--bg', '#f7fafc');
      root.style.setProperty('--card', '#ffffff');
      root.style.setProperty('--muted', '#475569');
      root.style.setProperty('--accent', '#2563eb');
      root.style.setProperty('--text', '#0b1220');
      localStorage.setItem('theme', 'light');
      themeToggle && (themeToggle.textContent = '☀️');
    } else {
      root.style.removeProperty('--bg');
      root.style.removeProperty('--card');
      root.style.setProperty('--muted', '#9aa4b2');
      root.style.setProperty('--accent', '#7dd3fc');
      root.style.setProperty('--text', '#e6eef6');
      localStorage.setItem('theme', 'dark');
      themeToggle && (themeToggle.textContent = '🌙');
    }
  }

  // Contact form
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.textContent = '';
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        status.textContent = 'Please fill in all fields.';
        return;
      }
      // Simple email check
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        status.textContent = 'Please enter a valid email.';
        return;
      }

      // For demo: show success and clear form. Replace this with fetch to your backend or form provider.
      status.textContent = 'Thanks — your message was sent (demo).';
      form.reset();
      setTimeout(() => (status.textContent = ''), 5000);
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
