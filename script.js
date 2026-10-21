const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('details').forEach((item) => item.addEventListener('toggle', () => {
  if (item.open) document.querySelectorAll('details').forEach((other) => { if (other !== item) other.open = false; });
}));
