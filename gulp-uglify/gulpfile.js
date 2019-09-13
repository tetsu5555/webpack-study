const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

gulp.task("default", function () {
    return gulp.src('src/sample_es6.js')
        .pipe(babel({
            "presets": ["@babel/preset-env"]
        }))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('dest/'));
});
