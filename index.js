const menuIcon = document.querySelector('#menu-icon');
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('#close-icon');

function showMenu() {
  sidebar.style.display = 'flex';
}
function hideMenu() {
  sidebar.style.display = 'none';
}

menuIcon.addEventListener('click', showMenu);
closeIcon.addEventListener('click', hideMenu);