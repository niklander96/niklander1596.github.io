// Бургер меню
let burgerButton = document.querySelector('.upper-menu__button_burger');
let burgerClose = document.querySelector('.burger-menu__button_burgerX');
let burgerMenu = document.querySelector('.burger-menu');
let burgerMenuShow = document.querySelector('.burger-menu-show');
let land = document.querySelector('.land');
let center = document.querySelector('.center-main')


burgerButton.addEventListener("click", function (event) {
  event.preventDefault();
  burgerMenu.classList.add('burger-menu-show');
  land.classList.add('land_blur');

  burgerClose.addEventListener("click", function (event) {
    event.preventDefault();
    burgerMenu.classList.remove('burger-menu-show');
    land.classList.remove('land_blur');
  })
})

document.addEventListener("click", function (evt) {
if (evt.target.closest('.center-main')) {
    evt.preventDefault();
    burgerMenu.classList.remove('burger-menu-show');
    land.classList.remove('land_blur');
}

})
