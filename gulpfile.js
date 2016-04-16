var gulp = require('gulp');
var distRoot = require('./gulp-config.json').distRoot;
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var env = require('gulp-env');
var del = require('del');

requireDir('./tasks');

// Gulp needs to perform the following tasks:
// * Compile front end assets - JS / CSS / HTML (requires watch)
// 
// Directory structure is as follows:
// - src/
//    - scss/
//    - js/
//    - index.html
// - dist/
//    - css/
//    - js/
//    - index.html

// Setup env.
gulp.task('set-env:development', function () {
  env({
    vars: {
      NODE_ENV: 'development'
    }
  });
});
gulp.task('set-env:staging', function () {
  env({
    vars: {
      NODE_ENV: 'staging'
    }
  });
});
gulp.task('set-env:production', function () {
  env({
    vars: {
      NODE_ENV: 'production'
    }
  });
});

gulp.task('clean', function () {
  return del([distRoot]);
});



gulp.task('server', require('./server.js')(gulp))
