const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const minifyCss = require('gulp-minify-css');
const sass = require('gulp-sass')(require('sass')); 
const browserSync = require('browser-sync').create();

gulp.task('scripts', function () {
    return gulp.src('assests/js/main.js')
        .pipe(concat('main.js'))
        .pipe(uglify().on('error', function (e) {
            console.log(e);
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.stream());
});

gulp.task('styles', function () {
    return gulp.src('assests/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('assests/scss/**/*.scss', gulp.series('styles'));
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('scripts', 'styles', 'watch'));
