function toggleMenu(event) {
    const link = event.currentTarget;
    const submenu = link.nextElementSibling;
    const chevronDown = link.querySelector('.bx-chevron-down');

    if(submenu.classList.contains('show')){
        submenu.classList.remove('show');
        chevronDown.style.transform = 'rotate(0deg)';
    }else {
        submenu.classList.add('show');
        chevronDown.style.transform = 'rotate(180deg)';
    }
}

const aside = document.querySelector('aside');
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle input');
const main = document.querySelector('main');

menuToggle.addEventListener('click', () => {
    aside.classList.toggle('slide');
    header.classList.toggle('slide');
    main.classList.toggle('slide');
});
