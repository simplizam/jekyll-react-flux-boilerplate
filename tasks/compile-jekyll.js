var gulp = require('gulp');
var config = require('../gulp-config.json').jekyll;
var connect = require('gulp-connect');
var run = require('gulp-run');

gulp.task('compile:jekyll', function (callback) {
  var shellCommand = 'jekyll build';
  return gulp
    .src('../')
    .pipe(run(shellCommand));
});

gulp.task('jekyll-build--watch', function () {
  var shellCommand = 'jekyll build --watch';
  return gulp
    .src('../')
    .pipe(run(shellCommand));
});

gulp.task('watch:jekyll', ['jekyll-build--watch'], function () {
  
  // return gulp.watch([config.toWatch], ['compile:html']);
});