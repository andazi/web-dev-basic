const toggleMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggleMenu.addEventListener('click', function(){
    menu.classList.toggle('menu-list');
    toggleMenu.classList.toggle('toggle');
})