var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('webserver', function() {
  gulp.src('server/public')
    .pipe(webserver({
      fallback: 'index.html',
      port: 8888,
      proxies: [
        {
          source: '/api', target: 'http://localhost:3000/api'
        }
      ]
    }));
});

gulp.task('build', function () {
  return browserify({entries: './app/components/App.jsx', extensions: ['.jsx'], debug: true})
      .transform('babelify', {presets: ['es2015', 'react']})
      .bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('server/public'));
});

gulp.task('watch', ['build'], function () {
  gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['watch']);
