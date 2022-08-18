// Swiper
 let slider = document.querySelector('.swiper');
 let display = document.documentElement.clientWidth;

if (display <= '768') {
   new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slideToClickedSlide: true,
    slidesPerView: 'auto',
  });
} else {
  slider.classList.remove('swiper');
}


// Показать все бренды
let moreBrands = document.querySelectorAll('.brands-slider__list_item_hidden');
let btnBrands = document.querySelector('.brands-show-all__button');

btnBrands.addEventListener("click", ListenBrands);

function ListenBrands() {
  for (let i = 0; i < moreBrands.length; i++) {
    let itemBrands = moreBrands[i];
    if (itemBrands.style.display === "none") {
      itemBrands.style.display = "flex";
      btnBrands.classList.add('open-all');
      btnBrands.textContent = "Скрыть";
    } else {
      itemBrands.style.display = "none";
      btnBrands.textContent = "Показать все";
      btnBrands.classList.remove('open-all');
    }
  }
}
// Показать всю технику
let moreTechno = document.querySelectorAll('.techno-slider__list_item');
let btnTechno = document.querySelector('.techno-show-all__button');

btnTechno.addEventListener("click", function ListenTechno(e) {
  for (let i = 5; i < moreTechno.length; i++) {
    let itemTechno = moreTechno[i];
    if (itemTechno.style.display === "none") {
      itemTechno.style.display = "flex";
      btnTechno.classList.add('open-all');
      btnTechno.textContent = "Скрыть";
    } else {
      itemTechno.style.display = "none";
      btnTechno.textContent = "Показать все";
      btnTechno.classList.remove('open-all');
    }
  }
});

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

  crossButtonCall.addEventListener('click', function () {
    moreCall.classList.remove('call-show');
    land.classList.remove('land_blur');
    burgerMenu.classList.remove('burger-menu-blur');
  })
})
// Бургер меню
let burgerButton = document.querySelector('.upper-menu__button_burger');
let burgerClose = document.querySelector('.burger-menu__button_burgerX')
let pageBody = document.querySelector('.land');
let landBlur = document.querySelector('.land-blur');
let burgerMenuShow = document.querySelector('.burger-menu-show')

burgerButton.addEventListener("click", function (evt) {
  evt.preventDefault();
    burgerMenu.classList.add('burger-menu-show');
  land.classList.add('land_blur');

})

burgerClose.addEventListener("click", function () {
  burgerMenu.classList.remove('burger-menu-show');
  land.classList.remove('land_blur');

})

  // document.addEventListener("click", function () {
  //   if (this.classList.contains('burger-menu-show')) {
  //     burgerMenu.classList.remove('burger-menu-show');
  //     land.classList.remove('land_blur');
  //   }
  // })


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



