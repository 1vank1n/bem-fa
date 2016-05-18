block('fa-example-group')(
    content()(function () {
        return [
            {
                elem: 'title',
                content: this.ctx.title
            },
            {
                elem: 'items',
                tag: 'ul',
                mix : [{ block: 'fa-ul' }],
                content: this.ctx.content || this.ctx.icons.map(function (icon) {
                    icon.block = 'fa';

                    return {
                        elem : 'item',
                        content : [
                            icon,
                            {
                                elem: 'item-caption',
                                content: icon.icon + (icon.size ? ' ' + icon.size : '')
                            }
                        ]
                    };
                })
            }
        ];
    })
)
