# Сити Про 
*[На сайт](https://deniskoid.github.io/City_pro/)*


## Одностраничный сайт
>[Техническое задание](#tz)

>[Ссылка на макет](https://clck.ru/379DRk)

>[Итоги](#summary)

>[Сборка](#gulp)

_____

Сайт разработан в рамках четырёхнедельного спринта в сообществе Frontend *https://t.me/frontend_du2* 
____

### Цель спринта
*Разработать одностраничный сайт, согласно [ТЗ](#tz)*

### Личные цели
- Улучшить навыки адаптивной вёрстки
- Улучшить навыки разработки JavaScript кода
- Понять работу востребованных инструментов: Gsap, Lenis, Swiper. Научиться правильно внедрять их на сайт для
  совместной работы

## Разработка

Разработка сайта заняла 19 дней, при затратах +-3 часов свободного времени в день. Основной расход времени был на
интеграции со сторонними библиотеками. Что-то приходилось изучать с 0. Много времени уходило на изучение документации.

### Технологии

На этом проекте я решил задействовать как можно более обширный стек. Полагаю, что такой выбор избыточен для проекта
такого объёма в реальной жизни.

#### Необходимые

-  <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
- <img src="https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white"/>
- <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
- <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  
#### Дополнительные

- Gulp
- Webpack
- ESLint
- Prettier
- Stylelint

#### Сторонние библиотеки, фреймворки, API

- [Lenis](https://github.com/studio-freight/lenis)
- [Swiper](https://swiperjs.com/)
- [Gsap](https://gsap.com/)
- [YandexMap API](https://yandex.ru/maps-api/docs)

### Трудности

#### Качество макета
- Не описаны основные состаяния интерактивных элементов: форм, кнопок, ссылок
- Неконсистентные интервалы и размеры картинок. Есть дробные значения
- Отсутствует дизайн для промежуточных размеров экрана

### Задачи, которые приходилось решать

1. Для оптимизации работы сайта на мобильных устройствах, возникла необходимость отключать анимацию Gsap на мобильных разрешениях экрана.
2. В макете есть секция, в которой блок перестраивается в слайдер только на мобильном.
3. При интеграции Яндекс карты по рекомендованной инструкции, сильно падали оценки на Google PageSpeed. Было принято решение инициализировать скрипт карты только после начала скролла пользователем

## <a id="summary"></a>Итоги ##

В процессе разработки, был создан сайт, отвечающий всем требованиям технического задания. Сайт протестирован в
браузерах: Firefox, Google chrome, Sfari(ios); мобильных устройствах Redme note 8pro, iPhone 7. Все показатели Google
PageSpeed находятся в зелёной зоне.

**No RixelPerfect!**

**ToDo** — *Рефакторинг JavaScript кода*


## Примечание

### <a id="tz"></a>Техническое задание ###

1. Сайт должен быть адаптивными и корректно отображаться на десктопном и мобильном устройстве (телефоне)
2. HTML-код должен соответствовать стандартам W3C и проходить проверку на валидаторе. Все ошибки и предупреждения должны быть исправлены
3. CSS код должен быть оптимизирован и не содержать ненужных или дублирующихся стилей. Все стили должны быть расположены в отдельном файле
4. Сайт должен быть доступен для людей с ограниченными возможностями. Все элементы сайта должны иметь подходящие атрибуты для доступности, такие как alt для изображений и aria-label для интерактивных элементов
5. Именование классов должно соответствовать методологии БЭМ
6. Кнопки и ссылки должны реагировать на наведение курсора мыши, клик и фокус. Стилизация эффектов отклика для этого макета должна быть выбрана самостоятельно. Не забудьте предусмотреть анимацию и плавность изменения
7. HTML-код должен быть написан с использованием семантических тегов
8. Все элементы должны быть протестированы на разных устройствах и браузерах, чтобы гарантировать их корректную и плавную работу
9. Все интерактивные элементы: слайдеры, формы, модальные окна, карта, мобильное меню должны работать с помощью JS. (Допустимо использование библиотек)
10. В проекте должен быть применен Favicon
11. Проект должен быть загружен в GitHub, доступен в публичном доступе и размещен на github-pages
    
### <a id="gulp"></a>Сборка ###

Для сборки проекта используется связка Gulp и Webpack

#### Команды

> `gulp` - базовая команда, которая запускает сборку для разработки, используя browser-sync
> 
> `gulp docs` - команда для продакшн-сборки проекта. Все ассеты сжаты и оптимизированы для выкладки на хостинг.
