//ищем элемент кнопки
const btn = document.querySelector('.j-btn-test');

//ищем элемент иконки 1 и присваиваем значение переменной
svg1 = document.querySelector('.bi-arrow-clockwise');
//console.log(svg1);

//ищем элемент иконки 2 и присваиваем значение переменной
svg2 = document.querySelector('.srtaight-arrow');
//console.log(svg2)

//вешаем обработчик на кнопку
btn.addEventListener('click', () => {
  //меняем классы в элементах иконок
  svg1.classList.toggle('icon-display');
  svg1.classList.toggle('icon-hidden');
  //console.log(svg1);
  svg2.classList.toggle('icon-hidden');
  svg2.classList.toggle('icon-display');
 
});
