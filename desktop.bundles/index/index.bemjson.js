({
    block : 'page',
    title : 'BEM Font Awesome',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' },
        { elem : 'css', url : '_index.css' }
    ],
    scripts: [{ elem : 'js', url : '_index.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'row',
            content : [
                {
                    block : 'heading',
                    tag : 'h2',
                    content : 'Basic Icons'
                },
                {
                    block : 'fa',
                    icon : 'camera-retro'
                },
                ' fa-camera-retro'
            ]
        },
        {
            block : 'row',
            content : [
                {
                    block : 'heading',
                    tag : 'h2',
                    content : 'Larger Icons'
                },
                [
                    { 'size' : 'lg' },
                    { 'size' : '2x' },
                    { 'size' : '3x' },
                    { 'size' : '4x' },
                    { 'size' : '5x' }
                ].map(function(b){
                    return {
                        elem : 'newline',
                        tag : 'p',
                        content : [
                            {
                                block : 'fa',
                                icon : 'camera-retro',
                                size : b.size
                            }, ' fa-' + b.size
                        ]
                    }
                })
            ]
        },
        {
            block : 'row',
            content : [
                {
                    block : 'heading',
                    tag : 'h2',
                    content : 'Fixed Width Icons'
                },
                [
                    { 'icon' : 'home' },
                    { 'icon' : 'book' },
                    { 'icon' : 'pencil' },
                    { 'icon' : 'cog' }
                ].map(function(b){
                    return {
                        elem : 'newline',
                        tag : 'p',
                        content : [
                            {
                                block : 'fa',
                                icon : b.icon,
                                width : 'fixed'
                            }, ' fa-' + b.icon
                        ]
                    }
                })
            ]
        },
        {
            block : 'row',
            content : [
                {
                    block : 'heading',
                    tag : 'h2',
                    content : 'List Icons'
                },
                {
                    block : 'list',
                    tag : 'ul',
                    mix : { block: 'fa-ul' },
                    content : [
                        [
                            { 'icon' : 'check-square' },
                            { 'icon' : 'check-square' },
                            { 'icon' : 'check-square' },
                            { 'icon' : 'square' }
                        ].map(function(b){
                            return {
                                elem : 'item',
                                tag : 'li',
                                content : [
                                    {
                                        block : 'fa',
                                        icon : b.icon,
                                        list : true
                                    }, ' fa-' + b.icon
                                ]
                            }
                        })
                    ]
                }
            ]
        },
        {
            block : 'row',
            content : [
                {
                    block : 'heading',
                    tag : 'h2',
                    content : 'Animated Icons'
                },
                {
                    block : 'fa',
                    size : '5x',
                    icon : 'refresh',
                    rotate : 'spin'
                },
                {
                    block : 'fa',
                    size : '5x',
                    icon : 'spinner',
                    rotate : 'pulse'
                },
            ]
        },
        {
            block : 'row',
            content : [
                {
                    block : 'heading',
                    tag : 'h2',
                    content : 'Rotated & Flipped'
                },
                {
                    block : 'fa',
                    size : '5x',
                    icon : 'camera-retro',
                    rotate : '90'
                },
                {
                    block : 'fa',
                    size : '5x',
                    icon : 'camera-retro',
                    rotate : '180'
                },
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
                    flip : 'horizontal'
                },
                {
                    block : 'fa',
                    size : '5x',
                    icon : 'camera-retro',
                    rotate : '270',
                    flip : 'vertical'
                },
            ]
        },
        {
            block : 'row',
            content : [
                {
                    block : 'heading',
                    tag : 'h2',
                    content : 'Stacked Icons'
                },
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
            ]
        }
    ]
})
