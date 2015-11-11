var webserver = require('gulp-webserver');
var path = require('path');

global.gulp = require('gulp');

gulp.task('webserver', function setupWebServer(){
  gulp.src('./app/')
      .pipe(webserver({
        livereload: true,
        host: '0.0.0.0',
        port: 9000
      }));
});

gulp.task('default', ['webserver']);
