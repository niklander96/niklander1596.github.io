// Кнопки вызова модальных окон
let burgerMenu = document.querySelector('.burger-menu');
let land = document.querySelector('.land');
let crossButtonFeedback = document.querySelector('.feedback-cross__button');
let buttonFeedbackUpper = document.querySelector('.upper-menu__button_chat');
let moreFeedback = document.querySelector('.feedback');
let buttonFeedback = document.querySelector('.lower-menu__button_chat');
// Верхняя кнопка вызова обратной связи
buttonFeedbackUpper.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (window.screen.width >= 768) {
    evt.preventDefault()
    moreFeedback.classList.add('feedback-show');
    burgerMenu.classList.remove('burger-menu-show');
    land.classList.add('land_blur');

// Закрытие окна
    crossButtonFeedback.addEventListener('click', function () {
      moreFeedback.classList.remove('feedback-show');
      land.classList.remove('land_blur');
    })
  }
})
// Кнопка вызова обратной связи из меню-бургер
buttonFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  moreFeedback.classList.add('feedback-show');
  burgerMenu.classList.remove('burger-menu-show');
  burgerMenu.classList.add('burger-menu-blur');
  land.classList.add('land_blur');
// Закрытие окна
  crossButtonFeedback.addEventListener('click', function () {
    moreFeedback.classList.remove('feedback-show');
    land.classList.remove('land_blur');
    burgerMenu.classList.remove('burger-menu-blur');
  })
})

let moreCall = document.querySelector('.call');
let buttonCall = document.querySelector('.lower-menu__button_call');
let buttonCallUpper = document.querySelector('.upper-menu__button_call');
let crossButtonCall = document.querySelector('.call-cross__button');
// Верхняя кнопка звонка
buttonCallUpper.addEventListener('click', function (evt) {
  if (window.screen.width >= 768) {

    evt.preventDefault();
    moreCall.classList.add('call-show');
    burgerMenu.classList.remove('burger-menu-show');
    land.classList.add('land_blur');

    crossButtonCall.addEventListener('click', function () {
      moreCall.classList.remove('call-show');
      land.classList.remove('land_blur');

    })
  }
})
// Кнопка вызова звонка из меню-бургер
buttonCall.addEventListener('click', function (evt) {
  evt.preventDefault()
  moreCall.classList.add('call-show');
  burgerMenu.classList.remove('burger-menu-show');
  burgerMenu.classList.add('burger-menu-blur');
  land.classList.add('land_blur');
})
  crossButtonCall.addEventListener('click', function () {
    moreCall.classList.remove('call-show');
    land.classList.remove('land_blur');
    burgerMenu.classList.remove('burger-menu-blur');
  })
document.addEventListener("click", function (evt) {
  if (evt.target.closest('.center-main')) {
    evt.preventDefault();
    moreCall.classList.remove('call-show');
    moreFeedback.classList.remove('feedback-show');
    land.classList.remove('land_blur');
  }

})



