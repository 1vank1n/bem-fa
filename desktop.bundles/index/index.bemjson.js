({
    block : 'page',
    title : 'BEM Font Awesome',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' }
    ],
    scripts: [{ elem : 'js', url : '_index.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'container',
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
                            content : [
                                
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
