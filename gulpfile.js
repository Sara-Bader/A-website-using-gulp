const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

gulp.task('styles', function () {
    return gulp.src('assests/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src('assests/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('assests/scss/**/*.scss', gulp.series('styles'));
    gulp.watch('assests/images/**/*', gulp.series('images'));
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('styles', 'images', 'watch'));
