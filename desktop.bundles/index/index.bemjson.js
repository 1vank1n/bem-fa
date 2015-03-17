({
    block : 'page',
    title : 'BEM Font Awesome',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '../../libs/font-awesome/css/font-awesome.min.css' },
        { elem : 'css', url : '_index.css' }
    ],
    content : [
        {
            block : 'fa-example-group',
            title : 'Basic Icons',
            icons : [
                {
                    icon : 'camera-retro'
                }
            ]
        },
        {
            block : 'fa-example-group',
            title : 'Larger Icons',
            icons : [
                { 'size' : 'lg' },
                { 'size' : '2x' },
                { 'size' : '3x' },
                { 'size' : '4x' },
                { 'size' : '5x' }
            ].map(function(icon) {
                return {
                    icon : 'camera-retro',
                    size : icon.size
                };
            })
        },
        {
            block : 'fa-example-group',
            title : 'Fixed Width Icons',
            icons : [
                { 'icon' : 'home' },
                { 'icon' : 'book' },
                { 'icon' : 'pencil' },
                { 'icon' : 'cog' }
            ].map(function(icon) {
                icon.width = 'fixed';

                return icon;
            })
        },
        {
            block: 'fa-example-group',
            title: 'List Icons',
            icons: [
                { 'icon': 'check-square' },
                { 'icon': 'check-square' },
                { 'icon': 'check-square' },
                { 'icon': 'square' }
            ].map(function(icon) {
                icon.list = true;

                return icon;
            })
        },
        {
            block: 'fa-example-group',
            mods: { inline: true },
            title: 'Animated Icons',
            icons: [
                {
                    size : '5x',
                    icon : 'refresh',
                    animate : 'spin'
                },
                {
                    size : '5x',
                    icon : 'spinner',
                    animate : 'pulse'
                }
            ]
        },
        {
            block: 'fa-example-group',
            mods: { inline: true },
            title: 'Rotated & Flipped',
            icons: [
                {
                    size : '5x',
                    icon : 'camera-retro',
                    rotate : '90'
                },
                {
                    size : '5x',
                    icon : 'camera-retro',
                    rotate : '180'
                },
                {
                    size : '5x',
                    icon : 'camera-retro',
                    rotate : '270'
                },
                {
                    size : '5x',
                    icon : 'camera-retro',
                    flip : 'horizontal'
                },
                {
                    size : '5x',
                    icon : 'camera-retro',
                    rotate : '270',
                    flip : 'vertical'
                }
            ]
        },
        {
            block: 'fa-example-group',
            mods: { inline: true },
            title: 'Stacked Icons',
            content: [
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
            ]
        },
        {
            block: 'fa-example-group',
            mods: { inline: true },
            title: 'Free class',
            icons: [
                {
                    cls : 'fa-twitter fa-4x fa-flip-horizontal'
                }
            ]
        }
    ]
})
