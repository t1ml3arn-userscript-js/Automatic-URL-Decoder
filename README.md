# Automatic URL decoder

## Описание

Скрипт автоматически декодирует нечитаемые ссылки вида [https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82,_%D0%BC%D0%B8%D1%80!](https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82,_%D0%BC%D0%B8%D1%80!) в удобочитаемое [https://ru.wikipedia.org/wiki/Привет,_мир!](https://ru.wikipedia.org/wiki/Привет,_мир!).

## Демо

Файл `demo.html`. Онлайн можно посмотреть [здесь](http://htmlpreview.github.io/?https://github.com/t1ml3arn-userscript-js/Automatic-URL-Decoder/blob/master/demo.html).

## Установка

1. Установить одно из расширений [Violentmonkey](https://violentmonkey.github.io/get-it/), [Greasemonkey](https://www.greasespot.net), [Tampermonkey](https://tampermonkey.net/) для Вашего браузера.
2. Установить скрипт по [этой ссылке](https://greasyfork.org/scripts/40305-automatic-url-decoder/code/Automatic%20URL%20Decoder.user.js).

## Cтилизация

Скрипт стилизует декодированные ссылки. Чтобы отключить стилизацию, нужно в коде скрипта найти переменную `changedLinkStyle` и присвоить ей `null`.