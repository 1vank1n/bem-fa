# fa

Иконки от [Font Awesome](http://fortawesome.github.io/Font-Awesome/) версии **4.3.0**. Блок требует подключения css библиотеки, например от maxcdn:
```html
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
```

## Обзор блока

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#size">size</a> | <code>String</code> | Размер иконки. |
| <a href="#width">width</a> | <code>String</code> | Фиксированная ширина иконки. |
| <a href="#list">list</a> | <code>Boolean</code> | Иконка элемента списка. |
| <a href="#rotate">rotate</a> | <code>String, Integer</code> | Изменение угла. |
| <a href="#animate">animate</a> | <code>String</code> | Постоянное вращение иконки. |
| <a href="#flip">flip</a> | <code>String</code> | Переворачивает иконку по горизонтальной\вертикальной оси. |
| <a href="#stack">stack</a> | <code>String</code> | Используется при объединении иконок в стэк. |
| <a href="#cls">cls</a> | <code>String</code> | Прокидывает классы напрямую, если тебе так удобнее. |

## Описание блока

Пример добавления иконки:

```js
{
    block : 'fa',
    icon : 'camera-retro'
},
' Фотоаппаратище'
```

Результат:
```html
<i class="fa  fa-camera-retro"></i> Фотоаппаратище
```

### Специализированные поля блока

<a name="size"></a>

#### Поле `size`

Тип: `String`.

Определяет размер иконки.

```js
{
    block : 'fa',
    icon : 'camera-retro',
    size : '4x'
},
' Большой фотоаппаратище'
```

Результат:
```html
<i class="fa  fa-camera-retro fa-4x"></i> Большой фотоаппаратище
```

<a name="width"></a>

#### Поле `width`

Тип: `String`.

Определяет класс (.fa-fw) который задаёт фиксированный размер иконки.

```js
{
    block : 'fa',
    icon : 'camera-retro',
    width : 'fixed'
},
' Фиксированный фотоаппаратище'
```

Результат:
```html
<i class="fa  fa-camera-retro fa-fw"></i> Фиксированный фотоаппаратище
```

#### Поле `list`

Тип: `Boolean`.

Определяет класс (.fa-li) который выставляют иконку как иконку элемета списка.

```js
{
    block : 'list',
    tag : 'ul',
    mix : { block: 'fa-ul' },
    content : [
        [
            { 'icon' : 'check-square', 'text' : 'bla bla bla 1' },
            { 'icon' : 'check-square', 'text' : 'bla bla bla 2' },
            { 'icon' : 'check-square', 'text' : 'bla bla bla 3' },
            { 'icon' : 'square', 'text' : 'bla bla bla 4' }
        ].map(function(b){
            return {
                elem : 'item',
                tag : 'li',
                content : [
                    {
                        block : 'fa',
                        icon : b.icon,
                        list : true
                    }, b.text
                ]
            }
        })
    ]
}
```

Результат:
```html
<ul class="list fa-ul">
    <li class="list__item"><i class="fa  fa-check-square fa-li"></i>bla bla bla 1</li>
    <li class="list__item"><i class="fa  fa-check-square fa-li"></i>bla bla bla 2</li>
    <li class="list__item"><i class="fa  fa-check-square fa-li"></i>bla bla bla 3</li>
    <li class="list__item"><i class="fa  fa-square fa-li"></i>bla bla bla 4</li>
</ul>
```

#### Поле `rotate`

Тип: `String`, `Integer`.

Для вращения:
* 90, 180, 270 либо '90', '180', '270' – задаёт угол поворота иконки

```js
{
    block : 'fa',
    size : '5x',
    icon : 'camera-retro',
    rotate : '270'
},
{
    block : 'fa',
    size : '5x',
    icon : 'camera-retro',
    rotate : '90'
}
```

Результат:
```html
<i class="fa  fa-camera-retro fa-5x fa-rotate-270"></i>
<i class="fa  fa-camera-retro fa-5x fa-rotate-90"></i>
```

#### Поле `animate`

Тип: `String`, `Integer`.

Анимация:
* 'spin' – постоянное вращение
* 'pulse' – ступенчатое вращение (оборот за 8 шагов)

```js
{
    block : 'fa',
    size : '5x',
    icon : 'refresh',
    animate : 'spin'
},
{
    block : 'fa',
    size : '5x',
    icon : 'refresh',
    animate : 'pulse'
}
```

Результат:
```html
<i class="fa  fa-refresh fa-5x fa-spin"></i>
<i class="fa  fa-camera-retro fa-5x fa-pulse"></i>
```

#### Поле `flip`

Тип: `String`.

Для отображения:
* 'horizontal' – отразить иконку по горизонтали
* 'vertical' – – отразить иконку по вертикали

```js
{
    block : 'fa',
    size : '5x',
    icon : 'camera-retro',
    flip : 'horizontal'
},
{
    block : 'fa',
    size : '5x',
    icon : 'camera-retro',
    flip : 'vertical'
}
```

Результат:
```html
<i class="fa  fa-camera-retro fa-5x fa-flip-horizontal"></i>
<i class="fa  fa-camera-retro fa-5x fa-flip-vertical"></i>
```

#### Поле `stack`

Тип: `String`.

Указывает отношение размеров иконок в стэке. Допустимые значения:
* '1x'
* '2x'

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

#### Поле `stack`

Пример добавления стэка иконок:

```js
{
    block : 'fa',
    size : '5x',
    stack : [
        {
            size : '1x',
            icon : 'twitter'
        },
        {
            size : '2x',
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

#### Поле `cls`

Тип: `String`.

Напрямую, всё что напишешь, прокидывает в классы. **Если комбинировать с обычными свойствами блока, то они работать не будут.**

```js
{
    block : 'fa',
    cls : 'fa-twitter fa-4x fa-flip-horizontal bla-bla-bla'
}
```

Результат:
```html
<i class="fa fa-twitter fa-4x fa-flip-horizontal bla-bla-bla"></i>
```
