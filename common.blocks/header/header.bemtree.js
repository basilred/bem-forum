block('header').content()(function() {
    var i18n = this.require('i18n');

    return [
        {
            block: 'logo'
        },
        this.data.user ? [
            {
                block: 'avatar'
            },
            {
                block: 'button',
                mods: { theme: 'islands', size: 'm', view: 'action' },
                text: i18n(this.block, 'writePost')
            },
            {
                block: 'button',
                mods: { theme: 'islands', size: 'm' },
                text: i18n(this.block, 'exit')
            }
        ] : {
            block: 'button',
            mix: { block: 'header', elem: 'button' },
            mods: { theme: 'islands', size: 'm', view: 'action' },
            text: i18n(this.block, 'loginWithGh')
        }
    ];
});
