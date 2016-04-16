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
  console.log('watch')
  var shellCommand = 'jekyll build --watch --incremental';
  return gulp
    .src('../')
    .pipe(run(shellCommand));
});

gulp.task('watch:jekyll', function () {
  gulp.run('jekyll-build--watch');
  console.log('watchinggngngng')
  return gulp.watch(config.toWatch, function () {
    return gulp
      .src(config.toWatch)
      .pipe(connect.reload());
  });
});