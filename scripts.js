const menu = document.getElementById('menu')
const hamburguer = document.getElementById('hamburguer')
const contact = document.getElementById('contact-button')

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('nav__ul')
    menu.classList.toggle('menu--show')
});
