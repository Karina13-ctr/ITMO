Опишите насколько помните, что происходит после ввода адреса сайта "ya.ru" в строку браузера до появления изображения на экране?
Браузер отправляет запрос на сервер, использя протокол http, далее браузер соединяется с сервером по ip-адресу запрашивая содержимое страницы. Сервер обрабатывает запрос и отправляет данные обратно, загружая на страницу браузера html, css и прочие элементы.

Расскажите, что знаете о box-model; из каких частей состоит, как рассчитывается?
Правила, при которых элементы на веб-странице взаимодействуют между собой. Состоит из границ, отступов, контента. Расчитывается с помощью width, padding, border, margin.

Что такое DOM, какие возможности его существование дает разработчику; как Вы понимаете динамические изменения в DOM?
Это структура html документа, который помогает программистам взаимодействовать с веб-страницей.Динамические изменения это когда элементы страницы изменяются без перезагрузки.

Какие существуют display и чем отличаются?
Это свойство определяет как элемент будет отображаться на веб-странице. Отличаются отображением на странице, например, block, inline, flex. Т.е. элемент занимает всю ширину или вообще скрыт.

Что такое margin collapse(схлопывание марджинов)?
Это действие влияет на размещение элементов на странице, при котором внешние вертикальные отступы нескольких элементов соединяются в один.

Как проявляется Адаптивность и как делается разработчиком?
Способность веб-страницы удобно и красиво отображаются на разных устройствах и экранах. Есть несколько подходов как это можно сделать, например, flexible grid, где используется процентное соотношение или @media, где прописываются ширина и высота экрана, при котором меняется расположение элементов.

Что происходит с элементом в случаях “visibility:hidden”, “display:none”, “position: absolute”?
visibility:hidden-элемент не отображается на странице, но занимает свое место, display:none - полностью удаляет и не занимает место, position: absolute - изменяет способ позиционирования элемента, его положение задаётся относительно ближайшего предка с свойством position (не равным static), или, если такого нет, относительно окна браузера.

Как себя будет вести inline-flex элемент в потоке?
Ведет себя как встроенный элемент в потоке, но при этом использует возможности flex контейнера.Располагается в одной линии с другими встроенными элементами.