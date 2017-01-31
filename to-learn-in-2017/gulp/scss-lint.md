# gulp-scss-lint
~~~
$ gem install scss_lint
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
뭔가 lint가 제대로 안됨

~~~ js
var gulp = require('gulp'),
    sassLint = require('gulp-sass-lint');

gulp.task('sassLint', function () {
  return gulp.src('static/ui/css/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
~~~
