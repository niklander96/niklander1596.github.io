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



