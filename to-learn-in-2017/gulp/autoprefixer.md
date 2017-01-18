# gulp-autoprefixer
with sourcemap

~~~ js
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('static/ui/css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('static/ui/css'));
});
~~~
