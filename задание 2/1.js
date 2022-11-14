
//ищем элемент кнопки
const btn = document.querySelector('.j-btn-test');

//window.innerWidth и window.innerHeight

// получим внутреннюю ширину окна в пикселях
const widthScreen = window.innerWidth;

// получим внутреннюю высоту окна в пикселях
const heightScreen = window.innerHeight;


//вешаем обработчик на кнопку
btn.addEventListener('click', () => {
    alert(`ширина экрана ${widthScreen}, высота экрана ${heightScreen}`);
});
