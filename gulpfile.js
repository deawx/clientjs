var gulp = require('gulp');
var closureCompiler = require('gulp-closure-compiler');

gulp.task('compress', function () {
  gulp.src('src/**/*.js')
    .pipe(closureCompiler({
      // compilerPath is optional, since google-closure-compiler is a dependency
      // compilerPath: 'bower_components/closure-compiler/lib/vendor/compiler.jar',
      fileName: 'client.min.js',
      compilerFlags: {
        compilation_level: 'SIMPLE_OPTIMIZATIONS',
        language_in: 'ECMASCRIPT5',
      },
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['compress'], function () {});
