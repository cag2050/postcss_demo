/**
 * Created by chenanguo on 16/12/26.
 */
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var fs = require('fs');

fs.readFile('js-handle/input.css', function (err, css) {
    postcss([autoprefixer])
        .process(css)
        .then(function (result) {
            console.log(result);
            if (result.css) {
                fs.writeFileSync('js-handle/output.css', result.css);
            }
            if (result.map) {
                fs.writeFileSync('js-handle/output.css.map', result.map);
            }
        });
});




