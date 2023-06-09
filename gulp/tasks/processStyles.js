import gulp from 'gulp';

// Configuration
import mode from '../mode.js';
import paths from '../paths.js';

// Plugins
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import csso from 'postcss-csso';
import dartSass from "sass";
import gulpIf from 'gulp-if';
import gulpSass from "gulp-sass";
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import sassGlob from 'gulp-sass-glob';

const sass = gulpSass(dartSass);

export default function processStyles(done) {
  return gulp.src(paths.processStyles.src, { sourcemaps: mode.isDev })
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(gulp.dest(paths.processStyles.dest, { sourcemaps: mode.isDev }))
    .pipe(gulpIf(mode.isDev, browser.stream()))
};
