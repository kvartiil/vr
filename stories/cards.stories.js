import { storiesOf } from '@storybook/html';

storiesOf('Cards', module)
    .add('List small', () => '<div class="c-card c-card--small">\n' +
        '    <div>\n' +
        '        <img class="card-title-icon" src="assets/Icons/user.svg" alt="user">\n' +
        '        <h1>title</h1>\n' +
        '    </div>\n' +
        '    <hr class="line c-card">\n' +
        '    <h3>Heading</h3>\n' +
        '</div>')
    .add('List large', () => '<div class="c-card c-card--large">\n' +
        '    <div>\n' +
        '        <img class="card-title-icon" src="assets/Icons/user.svg" alt="user">\n' +
        '        <h1>title</h1>\n' +
        '    </div>\n' +
        '    <hr class="c-card line">\n' +
        '    <h3>Heading</h3>\n' +
        '    <table class="card-columns">\n' +
        '        <tbody>\n' +
        '        <tr>\n' +
        '            <th>Isikukood</th>\n' +
        '            <td>47311200277</td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <th>Sünni kp</th>\n' +
        '            <td>20.11.1973</td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <th>Rahvus</th>\n' +
        '            <td>eestlane</td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <th>Telefon</th>\n' +
        '            <td>5096742</td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <th>E-post</th>\n' +
        '            <td>kairi.sarapuu@gmail.com</td>\n' +
        '        </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n' +
        '    <hr class="c-card line">\n' +
        '    <div class="link-divider">\n' +
        '        <a href="#">Link</a>\n' +
        '        <a href="#">Link</a>\n' +
        '        <a href="#">Link</a>\n' +
        '        <a href="#">Link</a>\n' +
        '    </div>\n' +
        '</div>')
    .add('List collapse', () => '<div class="c-card">\n' +
        '    <div>\n' +
        '        <img class="card-title-icon" src="assets/Icons/user.svg" alt="user">\n' +
        '        <h1>title</h1>\n' +
        '        <button class="card-info-button" data-toggle="collapse" data-target=".collapse" aria-expanded="false"\n' +
        '                aria-controls="collapse">\n' +
        '            <p>Rohkem infot</p>\n' +
        '            <img class="c-card--info-arrow" src="assets/Icons/arrow_down.svg" alt="expand">\n' +
        '        </button>\n' +
        '    </div>\n' +
        '    <hr class="line c-card">\n' +
        '    <h3>Heading</h3>\n' +
        '    <div class="collapse">\n' +
        '        <table class="card-columns">\n' +
        '            <tbody>\n' +
        '            <tr>\n' +
        '                <th>Isikukood</th>\n' +
        '                <td>47311200277</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <th>Sünni kp</th>\n' +
        '                <td>20.11.1973</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <th>Rahvus</th>\n' +
        '                <td>eestlane</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <th>Telefon</th>\n' +
        '                <td>5096742</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <th>E-post</th>\n' +
        '                <td>kairi.sarapuu@gmail.com</td>\n' +
        '            </tr>\n' +
        '            </tbody>\n' +
        '        </table>\n' +
        '        <hr class="c-card line">\n' +
        '        <div class="link-divider">\n' +
        '            <a href="#">Link</a>\n' +
        '            <a href="#">Link</a>\n' +
        '            <a href="#">Link</a>\n' +
        '            <a href="#">Link</a>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>')
    .add('List cookie', () => '<div class="c-card-cookie">\n' +
        '    <p>Palume Teie luba küpsiste kasutamiseks. Selleks, kuidas küpsite andmeid kasutame saad täpsemalt lugeda <a\n' +
        '            href="#">siit</a>.</p>\n' +
        '    <div class="c-card-cookie--buttons">\n' +
        '        <button class="c-card-cookie--btn-text">Rohkem infot</button>\n' +
        '        <button class="c-card-cookie--btn-primary">Button</button>\n' +
        '    </div>\n' +
        '</div>')
    .add('List responsive', () => '<div class="c-list">\n' +
        '    <div class="c-list--text">\n' +
        '        <hr class="line">\n' +
        '        <h1>Lapsetoetus 60 € / <br class="text-break">Vanemahüvitis 711,52 €</h1>\n' +
        '        <p>Väljamakse kuupäev: 08.09.2018</p>\n' +
        '    </div>\n' +
        '    <div class="c-list--price">\n' +
        '        <h2>Kokku <br class="price-break"><b>771,52 €</b></h2>\n' +
        '    </div>\n' +
        '    </div>');