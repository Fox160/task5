'use strict'

//Флаг состояния клика (произоошло нажатие/нет)
let clicked = false;
let link, linkMain, button, linkContainer;

function showMenu() {
  if (!clicked) {
    //Создание контейнера с элементами меню
    linkContainer = document.createElement('div');
    linkContainer.classList.add('flex-container');
    document.getElementsByTagName('header')[0].appendChild(linkContainer);

    linkMain = document.createElement('a');
    linkMain.innerHTML = "Главная";
    linkMain.href = "index.html";
    linkContainer.appendChild(linkMain);

    link = document.createElement('a');
    link.innerHTML = "Таблицы";
    link.href = "tables.html";
    linkContainer.appendChild(link);

    button = document.createElement('button');
    button.innerHTML = "Войти";
    button.onclick = function() {
      location.href = 'login.html';
    }
    linkContainer.appendChild(button);
    clicked = true;
  } else {
    //При повторном клике контейнер с меню удаляется
    clicked = false;
    document.getElementsByTagName('header')[0].removeChild(linkContainer);
  }
}
