riot.tag2('field-radio', '<ul class="uk-nav {options.length > 6 ? \'is-overflown\' : \'\'}"> <li each="{option, idx in options}"> <label onclick="{click}"><input type="radio" onfocus="{click}" value="{option.value}" __checked="{value == option.value ? \'checked\' : \'\'}"> {option.label === null && \'&mdash;\' || option.label}</label> </li> </ul>', 'field-radio .uk-nav,[riot-tag="field-radio"] .uk-nav { background: white; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } field-radio .uk-nav label,[riot-tag="field-radio"] .uk-nav label { cursor: pointer; display: block; padding: 5px 15px; } field-radio .uk-nav label input,[riot-tag="field-radio"] .uk-nav label input { margin-right: 10px; } field-radio .is-overflown,[riot-tag="field-radio"] .is-overflown { box-shadow: inset 0 -10px 30px -20px rgba(0,0,0,0.25); max-height: 197px; overflow: auto; }', '', function(opts) {

        if (opts.cls) {
            App.$(this.button).addClass(opts.cls.replace(/uk\-form\-/g, 'uk-button-'));
        }

        this.options = [];

        var i, l, o;

        if (opts.options) {
            if (typeof opts.options === 'string') {
                opts.options.split(',').map(function (v) { return v.trim(); });
            }

            if (Object.prototype.toString.call(opts.options) === '[object Array]' && opts.options.length) {
                l = opts.options.length;

                for (i = 0; i < l; i = i + 1) {
                    if (opts.options[i] === null || typeof opts.options[i] === 'string' || opts.options[i] === 'number') {
                        this.options.push({
                            value: opts.options[i],
                            label: opts.options[i]
                        });
                    } else if (typeof opts.options[i] === 'object' && (opts.options[i].label || opts.options[i].value)) {
                        this.options.push({
                            value: opts.options[i].value || opts.options[i].label,
                            label: opts.options[i].label || opts.options[i].value
                        });
                    }
                }
            }
        }

        this.value = null;

        this.$updateValue = function(value) {
            console.log('Setting:', value)

            if (this.value != value) {

                this.value = value;
                this.update();
            }

        }.bind(this);

        this.click = function(e) {
            var element = e.target || e.srcElement || null,
                radio;

            this.$updateValue(e.item.option.value);

            console.log(e.item.option.value, this.value);

            if (element && element.nodeName.toLowerCase() === 'label') {
                radio = element.getElementsByTagName('input');

                if (radio.length > 0) {
                    radio[0].focus();
                }
            }

            return false;
        }.bind(this)
}, '{ }');
