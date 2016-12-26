/**
 * Created by chenanguo on 16/12/26.
 */
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var fs = require('fs');

var css = '* { transition: all .1s; }';

postcss([autoprefixer])
    .process(css)
    .then(function (result) {
        console.log(result);
        if (result.css) {
            fs.writeFileSync('index1.css', result.css);
        }
        if (result.map) {
            fs.writeFileSync('index1.map', result.map);
        }
    });



