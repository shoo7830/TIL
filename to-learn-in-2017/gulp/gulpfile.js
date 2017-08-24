'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    scssLint = require('gulp-scss-lint'),
    stylish = require('gulp-scss-lint-stylish2'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('static/ui/css/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('static/ui/css'));
});

gulp.task('scss-lint', function() {
    var reporter = stylish();

    gulp.src('static/ui/css/**/*.scss')
        .pipe(plumber())
        .pipe(scssLint({ customReport: reporter.issues }))
        .pipe(reporter.printSummary);
});

gulp.task('less', function() {
    return gulp.src('static/ui/css/style.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('static/ui/css'));
});

gulp.task('watch', function() {
    gulp.watch('static/ui/css/**/*.scss', ['sass', 'scss-lint']);
    // gulp.watch('static/ui/css/style.less', ['less']);
});

gulp.task('default', ['watch']);