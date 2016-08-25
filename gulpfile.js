var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');

gulp.task('default',['serve', 'sass',]);
// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("./scss/main.scss")
  .pipe(sass())
  .pipe(gulp.dest("./css"))
  .pipe(browserSync.stream());
});
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("./scss/**/*.scss", ['sass']);
    gulp.watch("./**/*.html").on('change', browserSync.reload);
});
