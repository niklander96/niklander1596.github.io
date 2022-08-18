// Брэнды
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
