let menuMobile = document.querySelector('#menuMobile');
let imgMenuMobile = document.querySelector('.menu-mobile__button__img');
function menuShow() {
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.menu-mobile__button__img').src =
            '/assets/menuHambugerdark.svg';
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.menu-mobile__button__img').src =
            '/assets/menuHambugerclosedark.svg';
    }
}