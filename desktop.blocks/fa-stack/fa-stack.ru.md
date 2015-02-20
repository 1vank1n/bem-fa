# fa-stack

Блок для объединения иконок.

## Обзор блока

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#size">size</a> | <code>String</code> | Размер общего контейнера. |

## Описание блока

Пример добавления стэка иконок:

```js
{
    block : 'fa-stack',
    size : '5x',
    content : [
        {
            block : 'fa',
            stack : '1x',
            icon : 'twitter'
        },
        {
            block : 'fa',
            stack : '2x',
            icon : 'square-o'
        }
    ]
}
```

Результат:
```html
<span class="fa-stack fa-5x">
    <i class="fa  fa-twitter fa-stack-1x"></i>
    <i class="fa  fa-square-o fa-stack-2x"></i>
</span>
```