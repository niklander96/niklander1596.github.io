// Кнопка "Читать далее"
let paragraphSecond = document.querySelector('.about__description_second');
let paragraphThird = document.querySelector('.about__description_third');
let paragraphFourth = document.querySelector('.about__description_fourth');
let buttonReadMore = document.querySelector('.about__button_read-more');
let buttonCloseMore = document.querySelector('.about__button_read-more');
buttonReadMore.addEventListener('click', function () {

  paragraphThird.classList.add('about__description-show');
  paragraphFourth.classList.add('about__description-show');
  paragraphSecond.classList.add('about__description-close');
  buttonReadMore.classList.add('open-all');
  buttonReadMore.textContent = "Скрыть";

  buttonCloseMore.addEventListener('click', function () {
    paragraphThird.classList.remove('about__description-show');
    paragraphFourth.classList.remove('about__description-show');
    paragraphSecond.classList.remove('about__description-close');
    buttonReadMore.classList.remove('open-all');
    buttonReadMore.textContent = "Читать далее";
  })
})
