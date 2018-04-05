# Automatic URL decoder

Скрипт автоматически декодирует нечитаемые ссылки вида [https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82,_%D0%BC%D0%B8%D1%80!](https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82,_%D0%BC%D0%B8%D1%80!) в удобочитаемое [https://ru.wikipedia.org/wiki/Привет,_мир!](https://ru.wikipedia.org/wiki/Привет,_мир!).

## Установка
1. Установить одно из расширений [Violentmonkey](https://violentmonkey.github.io/get-it/), [Greasemonkey](https://www.greasespot.net), [Tampermonkey](https://tampermonkey.net/) для Вашего браузера.
2. Установить скрипт по [этой ссылке]().

## Дополнительно

Скрипт дает возможность стилизовать исправленные ссылки. Изначально это отключено. Чтобы включить эту возможность, нужно в тексте скрипта найти переменную `changedLinkStyle` и присвоить ей хэш-таблицу `underlineStyle`. Для вступления изменений в силу требуется перезагрузить целевую страницу.