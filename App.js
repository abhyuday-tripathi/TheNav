const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo2');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('open2');
  hamburger.classList.toggle('toggled');
  navList.classList.toggle('open');
});
