var gulp = require('gulp');
var sass = require('gulp-sass');
const sassGlob = require("gulp-sass-glob");

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sassGlob()) // Sassの@importにおけるglobを有効にする
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss',gulp.series('sass'));
});
