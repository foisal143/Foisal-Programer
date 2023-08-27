let bar = document.querySelector('menu-bar');
const navMenu = document.querySelector('.nav-menu');

function show() {
  if (navMenu.classList == 'nav-menu') {
    navMenu.classList.add('show');
  } else {
    navMenu.classList.remove('show');
  }
}
