({
    block: 'list',
    tag: 'ul',
    mix: {block: 'fa-ul'},
    content: [
        [
            {'icon': 'check-square', 'text': 'bla bla bla 1'},
            {'icon': 'check-square', 'text': 'bla bla bla 2'},
            {'icon': 'check-square', 'text': 'bla bla bla 3'},
            {'icon': 'square', 'text': 'bla bla bla 4'}
        ].map(function(b) {
            return {
                elem: 'item',
                tag: 'li',
                content: [
                    {
                        block: 'fa',
                        icon: b.icon,
                        list: true
                    }, b.text
                ]
            }
        })
    ]
});
