var webserver = require('gulp-webserver');
var path = require('path');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
global.gulp = require('gulp');

global.schoolPlatformPaths = {
  app: path.resolve('./app'),
  jsGlob: path.resolve('./app/scripts/**/*.js'),
  jsEntry: path.resolve('./app/scripts/app.js')
};

gulp.task('webserver',['javascript'], function setupWebServer(){
  gulp.src(schoolPlatformPaths.app)
      .pipe(webserver({
        livereload: true,
        host: '0.0.0.0',
        port: 9000
      }));
});

gulp.task('javascript',['watch'], function() {

  var bundler = browserify({
    entries: [schoolPlatformPaths.jsEntry],
    debug: true
  });

  var bundle = function() {
    return bundler
      .bundle()
      .on('error', function(err){
        console.log(err.toString());
      })
      .pipe(source('schoolPlatform.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./app/dist/'));
  };

  return bundle();
});
gulp.task('watch', function initWatchers() {
  gulp.watch(schoolPlatformPaths.jsGlob, ['javascript']);
});
gulp.task('default', ['webserver', 'watch']);
