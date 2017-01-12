# gulp-scss-lint
~~~
$ gem install gulp-scss-lint
~~~

~~~ js
var gulp = require('gulp'),
    scssLint = require('gulp-scss-lint'),
    stylish  = require('gulp-scss-lint-stylish2');

gulp.task('scss-lint', function() {
    var reporter = stylish();

    return gulp.src('static/ui/css/**/*.scss')
      .pipe( scssLint({ customReport: reporter.issues }) )
      .pipe( reporter.printSummary )
});
~~~

# gulp-sass-lint
