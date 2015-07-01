var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');

gulp.task('default', ['client:js','client:index']);

gulp.task('client:index', function () {
  return gulp.src('index.html').pipe(gulp.dest('public'));
});
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('client:js', function() {
    browserify({
    entries: './client/app.js',
    debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('output.js'))
    .pipe(gulp.dest('./public'));
});
