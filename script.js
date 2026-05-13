// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => navLinks.classList.toggle('open'));

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Smooth header shrink on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 40
    ? '0 4px 24px rgba(0,0,0,.13)'
    : '0 2px 16px rgba(0,0,0,.07)';
});

// Scroll-reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.feature-card, .produto-card, .depo-card, .galeria-item, .stat'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
});

// Form submit handler
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('[type=submit]');
  const success = document.getElementById('success');
  btn.disabled = true;
  btn.textContent = 'Enviando...';
  setTimeout(() => {
    btn.textContent = 'Enviado! ✅';
    success.style.display = 'block';
    e.target.reset();
  }, 1200);
}
