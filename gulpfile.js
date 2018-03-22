const gulp          = require('gulp');
const babel         = require('gulp-babel');
const browserSync   = require('browser-sync').create();
const uglify        = require('gulp-uglify');
const concat        = require('gulp-concat');

/*
  -- TOP LEVEL FUNCTIONS --
  gulp.task - Define tasks
  gulp.src - Point to files to use
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes
*/

// Copy All HTML files
gulp.task('copyHtml', () => {
  gulp.src('src/*.html')
      .pipe(gulp.dest('build'));
});

// Minify JS
gulp.task('minify', () => {
  gulp.src('src/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/js'));
});

// Scripts
gulp.task('scripts', () => {
  gulp.src(['src/js/ball.js', 'src/js/sketch.js'])
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['env']
    }))
    // .pipe(uglify())
    .pipe(gulp.dest('build/js'));

  gulp.src(['src/js/plugins/**'])
    .pipe(gulp.dest('build/js/plugins'));
});

gulp.task('default', ['copyHtml', 'scripts']);

gulp.task('watch', () => {

  browserSync.init({
    server: './build'
  });

  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/js/plugins/**/*.js', ['scripts']);
  gulp.watch('src/*.html', ['copyHtml']);
});
