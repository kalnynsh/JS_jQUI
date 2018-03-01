"use strict";

(function($) {
  $(document).ready(function() {
    $(".nav-bar").on("click", ".nav-bar__item1:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest(".content__info1")
        .find(".info1")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);
// $(".nav-bar").on("click", ...)
// Находим HTML элементы .nav-bar
// Обрабатываем событие 'onclick' для
// не активных элементов '.nav-bar__item1:not(.active)'
// this == event.target -- объект, на котором произошло событие
// присваиваем event.target (li.nav-bar__item1)
// класс '.active'
// Ищем соседей (li.nav-bar__item1) убираем '.active'
// Поднимаемся ввверх до ближайщего "div.content__info1"
// в нем находим коллекцию "div.info1" - количество должно совпадать
// с "li.nav-bar__item1"
// Удаляем в коллекции у элемента, ранее назначенный класс '.active'.
// По индексу event.target (li.nav-bar__item1)
// находим в коллекции "div.info1['index']"
// элемент для отображения через присвоение класса '.active'
