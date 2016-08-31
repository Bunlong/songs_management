var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  return browserify({entries: './app/components/App.jsx', extensions: ['.jsx'], debug: true})
      .transform('babelify', {presets: ['es2015', 'react']})
      .bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('public'));
});

gulp.task('watch', ['build'], function () {
  gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['watch']);
