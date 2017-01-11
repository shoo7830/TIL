# mocha

install
~~~
npm install -g mocha
~~~

dev depedency install
~~~
npm install mocha --save-dev
~~~

## gulp-mocha
~~~ js
// gulpfile.js
'use strict';

var gulp = require('gulp'),
    mocha = require('gulp-mocha');

gulp.task('mocha', function () {
    return gulp.src('static/ui/js/test.js', {read: false})
        .pipe(mocha({reporter: 'spec'}))
});
~~~
