const wsUri = 'wss://echo-ws-service.herokuapp.com';

//получаем узлы
const btnSend = document.querySelector('.button-send');
const btnGeo = document.querySelector('.button-geo');
const input = document.querySelector('#input');
const dialog = document.querySelector('#output');
const mapLink = document.querySelector('#map-link');

//создаем вебсокет
const websocket = new WebSocket(wsUri);

//отслеживаем открытие вебсокета
websocket.onopen = function () {
    console.log("CONNECTED");
};

// отслеживаем закрытие вебсокета
websocket.onclose = function () {
    console.log("DISCONNECTED");
};    

// обрабатываем получаемое сообщение
websocket.onmessage = function (evt) {
    dialog.innerHTML += '<p class="message-server">' + evt.data+'</p>'
};

// отслеживаем ошибки вебсокета
websocket.onerror = function (evt) {
    console.log(evt.data);
};

// создаем обработчик на отправку сообщения на сервер
btnSend.addEventListener('click', () => {
    const message = input.value;
    dialog.innerHTML += '<p class="message-client">' + message+'</p>'
    websocket.send(message);
  });

// создаем обработчик на получение геолокации
btnGeo.addEventListener('click', () => {
    const message = "Геолокация";
    dialog.innerHTML += '<p class="message-client">'+message+'</p>';
  
    if (!navigator.geolocation) {
        dialog.innerHTML += '<p class="message-server">Geolocation не поддерживается вашим браузером</p>';
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
});
  
// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
  //console.log('position', position);
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    dialog.innerHTML += `<a id="map-link" href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" target="_blank">Ссылка на карту</a>`;
}

// Функция, выводящая текст об ошибке при определении геолокации
const error = () => {
    dialog.innerHTML += '<p class="message-server">Невозможно получить ваше местоположение</p>';
}