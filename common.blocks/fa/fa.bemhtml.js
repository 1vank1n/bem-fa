block('fa')(
    tag()('i'),
    cls()(function() {
        if (this.ctx.cls) {
            return this.ctx.cls;
        }

        var arr = [];
        var icon = this.ctx.icon;
        var size = this.ctx.size;
        var width = this.ctx.width;
        var list = this.ctx.list;
        var rotate = this.ctx.rotate;
        var animate = this.ctx.animate;
        var flip = this.ctx.flip;
        var instack = this.ctx.__instack;

        if (icon) arr.push('', icon);
        if (size) {
            if (instack) {
                arr.push('stack-' + size);
            } else {
                arr.push(size);
            }
        }
        if (width === 'fixed') arr.push('fw');
        if (list) arr.push('li');
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
        if (flip) arr.push('flip-' + flip);

        return arr.join(' fa-');
    }),
    attrs()(function() {
        if (this.ctx.color) {
            return {
                style: 'color:' + this.ctx.color
            };
        }
    })
)

block('fa').match(function() {
    return Array.isArray(this.ctx.stack);
})(
    tag()('span'),
    bem()(false),
    cls()(function() {
        return 'fa-stack fa-' + this.ctx.size;
    }),
    content()(function() {
        return this.ctx.stack.map(function(icon) {
            icon.block = 'fa';
            icon.__instack = true;

            return icon;
        });
    })
)
