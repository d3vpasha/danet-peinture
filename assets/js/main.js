// Menu mobile
const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  burger.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

// Apparition au défilement, sauf si l'utilisateur limite les animations
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-reveal');
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.chip, .presta, .about-text, .stamp-card, .zone > *, .contact > *')
    .forEach((el) => { el.classList.add('reveal'); io.observe(el); });
}

// Formulaire : prépare un mail, aucun envoi côté serveur
document.getElementById('devis').addEventListener('submit', (ev) => {
  ev.preventDefault();
  const f = new FormData(ev.target);
  const body = `Nom : ${f.get('nom')}\nTéléphone : ${f.get('tel')}\nCommune : ${f.get('commune')}\nTravaux : ${f.get('travaux')}\n\n${f.get('message')}`;
  location.href = `mailto:danetpeinture@gmail.com?subject=${encodeURIComponent('Demande de devis')}&body=${encodeURIComponent(body)}`;
});

// Année du footer
document.getElementById('year').textContent = new Date().getFullYear();
