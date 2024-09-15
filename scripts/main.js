const menuMobile = document.querySelector('#menuMobile');
const imgMenuMobile = document.querySelector('#icon-button-menu');

const menuMobileButton = document.querySelector('#button-menu-mobile');

menuMobileButton.addEventListener('click', menuShow);

function menuShow() {
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        imgMenuMobile.innerHTML = 'menu'
    } else{
        menuMobile.classList.add('open');
        imgMenuMobile.innerHTML = 'close';
    }
}

