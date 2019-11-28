import { storiesOf } from '@storybook/html';

storiesOf('Snackbars', module)
    .add('info', () => '<div class="c-snackbar c-snackbar--info">\n' +
        '    <h1>Teade</h1>\n' +
        '     <img class="close" src="assets/Icons/close.png" alt="sulge">' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "Minu andmed" - "Suunamine.</p>\n' +
        '</div>')
    .add('success', () => '<div class="c-snackbar c-snackbar--success">\n' +
        '    <h1>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "Minu andmed" - "Suunamine.</p>\n' +
        '</div>')
    .add('warning', () => '<div class="c-snackbar c-snackbar--warning">\n' +
        '    <h1>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "<a href="#">Minu andmed</a>" - "Suunamine.</p>\n' +
        '</div>')
    .add('error', () => '<div class="c-snackbar c-snackbar--error">\n' +
        '    <h1>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "Minu andmed" - "Suunamine.</p>\n')
    .add('info with icon', () => '<div class="c-snackbar c-snackbar--info">\n' +
        '    <h1><span><img class="snackbar-w-icon" src="assets/Icons/info.png" alt="info"></span>\n' +
        '   Teade</h1>' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "Minu andmed" - "Suunamine.</p>\n' +
        '</div>')
    .add('success with icon', () => '<div class="c-snackbar c-snackbar--success">\n' +
        '    <h1><span><img class="snackbar-w-icon" src="assets/Icons/success.png" alt="õnnestus"></span>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "Minu andmed" - "Suunamine.</p>\n' +
        '</div>')
    .add('warning with icon', () => '<div class="c-snackbar c-snackbar--warning">\n' +
        '    <h1><span><img class="snackbar-w-icon" src="assets/Icons/warning.png" alt="hoiatus"></span>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "<a href="#">Minu andmed</a>" - "Suunamine.</p>\n' +
        '</div>')
    .add('error with icon', () => '<div class="c-snackbar c-snackbar--error">\n' +
        '    <h1><span><img class="snackbar-w-icon" src="assets/Icons/error.png" alt="error"></span>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "Minu andmed" - "Suunamine.</p>\n' +
        '</div>')
    .add('grayscale info', () => '<div class="c-snackbar c-snackbar--info-grayscale">\n' +
        '    <h1><span><img class="snackbar-w-icon" src="assets/Icons/info.png" alt="info"></span>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "Minu andmed" - "Suunamine.</p>\n' +
        '</div>')
    .add('grayscale success', () => '<div class="c-snackbar c-snackbar--success-grayscale">\n' +
        '    <h1><span><img class="snackbar-w-icon" src="assets/Icons/success.png" alt="õnnestus"></span>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "Minu andmed" - "Suunamine.</p>\n' +
        '</div>')
    .add('grayscale warning', () => '<div class="c-snackbar c-snackbar--warning-grayscale">\n' +
        '    <h1><span><img class="snackbar-w-icon" src="assets/Icons/warning.png" alt="hoiatus"></span>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "<a href="#">Minu andmed</a>" - "Suunamine.</p>\n' +
        '</div>')
    .add('grayscale error', () => '<div class="c-snackbar c-snackbar--error-grayscale">\n' +
        '    <h1><span><img class="snackbar-w-icon" src="assets/Icons/error.png" alt="error"></span>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "Minu andmed" - "Suunamine.</p>\n' +
        '</div>')
    .add('deuteranopia info', () => '<div class="c-snackbar c-snackbar--info-deuteranopia">\n' +
        '    <h1><span><img class="snackbar-w-icon" src="assets/Icons/info.png" alt="info"></span>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "Minu andmed" - "Suunamine.</p>\n' +
        '</div>')
    .add('deuteranopia success', () => '<div class="c-snackbar c-snackbar--success-deuteranopia">\n' +
        '    <h1><span><img class="snackbar-w-icon" src="assets/Icons/success.png" alt="õnnestus"></span>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "Minu andmed" - "Suunamine.</p>\n' +
        '</div>')
    .add('deuteranopia warning', () => '<div class="c-snackbar c-snackbar--warning-deuteranopia">\n' +
        '    <h1><span><img class="snackbar-w-icon" src="assets/Icons/warning.png" alt="hoiatus"></span>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "<a href="#">Minu andmed</a>" - "Suunamine.</p>\n' +
        '</div>')
    .add('deuteranopia error', () => '<div class="c-snackbar c-snackbar--error-deuteranopia">\n' +
        '    <h1><span><img class="snackbar-w-icon" src="assets/Icons/error.png" alt="error"></span>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "Minu andmed" - "Suunamine.</p>\n' +
        '</div>')
    .add('tritanopia info', () => '<div class="c-snackbar c-snackbar--info-tritanopia">\n' +
        '    <h1><span><img class="snackbar-w-icon" src="assets/Icons/info.png" alt="info"></span>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "Minu andmed" - "Suunamine.</p>\n' +
        '</div>')
    .add('tritanopia success', () => '<div class="c-snackbar c-snackbar--success-tritanopia">\n' +
        '    <h1><span><img class="snackbar-w-icon" src="assets/Icons/success.png" alt="õnnestus"></span>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "Minu andmed" - "Suunamine.</p>\n' +
        '</div>')
    .add('tritanopia warning', () => '<div class="c-snackbar c-snackbar--warning-tritanopia">\n' +
        '    <h1><span><img class="snackbar-w-icon" src="assets/Icons/warning.png" alt="hoiatus"></span>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "<a href="#">Minu andmed</a>" - "Suunamine.</p>\n' +
        '</div>')
    .add('tritanopia error', () => '<div class="c-snackbar c-snackbar--error-tritanopia">\n' +
        '    <h1><span><img class="snackbar-w-icon" src="assets/Icons/error.png" alt="error"></span>Teade</h1>\n' +
        '    <img class="close" src="assets/Icons/close.png" alt="sulge">\n' +
        '    <p>Suunatud e-postile kasutaja kairi.sarapuu@gmail.com <br>\n' +
        '        Soovi korral muuda suunamine kohe siin või vasak menüüst "Minu andmed" - "Suunamine.</p>\n' +
        '</div>');