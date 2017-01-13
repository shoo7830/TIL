# gulp-plumber
install 
~~~
$ npm install --save-dev gulp-plumber
~~~

Usage
~~~js
var gulp = require('gulp'),
    plumber = require('gulp-plumber');
    
gulp.task('sass', function () {
  return gulp.src('static/ui/css/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('static/ui/css'));
});
~~~
