#html hint

~~~ js
var gulp = require('gulp'),
    htmlhint = require('gulp-htmlhint');

gulp.task('htmlhint', function () {
    return gulp.src("static/ui/*.html")
       .pipe(htmlhint())
       .pipe(htmlhint.reporter())
});
~~~
