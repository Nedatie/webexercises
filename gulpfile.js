const gulp = require('gulp');
const sass = require('gulp-sass');
const debug = require('gulp-debug');
const browserSync = require('browser-sync').create();
const del = require('del');

const sassGlob = './src/style/**/*.scss';
const htmlGlob = './src/**/*.html';
const jsGlob = './src/script/**/*.js';
const imgGlob = './src/image/**/*.*';

function style() {
    return gulp.src(sassGlob)
        .pipe(debug({ title: 'sass-debug:' }))
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

function html() {
    return gulp.src(htmlGlob)
        .pipe(debug({ title: 'html-debug:' }))
        .pipe(gulp.dest('./dist'));
}

function js() {
    return gulp.src(jsGlob)
        .pipe(debug({ title: 'js-debug:' }))
        .pipe(gulp.dest('./dist/script'));
}

function img() {
    return gulp.src(imgGlob)
        .pipe(debug({ title: 'img-debug:' }))
        .pipe(gulp.dest('./dist/image'));
}

function clean() {
    return del(['dist/**', '!dist'], {force:true});
}

function watch(cb) {
    const runOnStartup = { ignoreInitial: false };

    browserSync.init({
        watch: true,
        server: './dist'
    });
    gulp.watch(sassGlob, runOnStartup, style);
    gulp.watch(htmlGlob, runOnStartup, html);
    gulp.watch(jsGlob, runOnStartup, js);
    gulp.watch(imgGlob, runOnStartup, img);
    cb();  
}

function publish(cb) {
    clean();
    html();
    style();
    js();
    img();
    cb();
}

function defaultTask(cb) {
    watch(cb);
}

exports.style = style;
exports.html = html;
exports.js = js;
exports.img = img;
exports.watch = watch;
exports.default = defaultTask;
exports.clean = clean;
exports.publish = publish;
