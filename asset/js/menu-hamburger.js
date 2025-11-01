const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navbar.classList.toggle('active');
});
