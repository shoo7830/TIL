
import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gutil from 'gulp-util';

const dirs = {
	src: 'src',
	dest: 'dist'
};

gulp.task('styles', () => {
	return gulp.src(dirs.src + '/sass/*.{css,scss}')
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(sourcemaps.write('.'))
		.pipe(rename('bundle.min.css'))
		.pipe(gulp.dest(dirs.dest));
});

gulp.task('scripts', () => {
    return browserify({entries: dirs.src + '/js/app.js', extensions: ['.jsx']})
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
		.pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('.'))
		.pipe(rename('bundle.min.js'))
		.pipe(gulp.dest(dirs.dest));
});

gulp.task('watch', () => {
	gulp.watch(dirs.src + '/js/*.{js,jsx}', ['scripts']);
	gulp.watch(dirs.src + '/sass/*.{css,scss}', ['styles']);
});

gulp.task('default', ['styles', 'scripts']);
