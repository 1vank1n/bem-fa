module.exports = function(bh) {
    bh.match('fa', function(ctx, json) {
        if (Array.isArray(json.stack)) {
            ctx.tag('span')
            ctx.cls('fa-stack fa-' + json.size, true)
            ctx.bem(false, true)

            ctx.content(json.stack.map(function(icon) {
                icon.block = 'fa';
                icon.__instack = true;

                return icon
            }), true);
        } else {
            /* tag */
            ctx.tag('i');

            /* cls */
            if (!json.cls) {
                var arr = [];
                var icon = json.icon;
                var size = json.size;
                var width = json.width;
                var list = json.list;
                var rotate = json.rotate;
                var animate = json.animate;
                var flip = json.flip;
                var instack = json.__instack;

                if (icon) {
                    arr.push('', icon);
                }

                if (size) {
                    if (instack) {
                        arr.push('stack-' + size);
                    } else {
                        arr.push(size);
                    }
                }

                if (width === 'fixed') {
                    arr.push('fw');
                }

                if (list) {
                    arr.push('li');
                }

                if (rotate) {
                    var angle = 0;
                    switch (rotate) {
                        case ('270' || 270):
                            angle += 90;
                        case ('180' || 180):
                            angle += 90;
                        case ('90' || 90):
                            angle += 90;
                        default:
                            arr.push('rotate-' + angle);
                    }
                }

                if (animate === 'spin' || animate === 'pulse') {
                    arr.push(animate);
                }

                if (flip) {
                    arr.push('flip-' + flip);
                }

                ctx.cls(arr.join(' fa-'), true);
            }

            if (json.color) {
                ctx.attrs({
                    style: 'color:' + json.color
                });
            }
        }
    })
}
