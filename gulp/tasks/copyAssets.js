import gulp from 'gulp';

// Configuration
import paths from '../paths.js';

export default function copyAssets () {
  return gulp.src(paths.copyAssets.src, {
    base: paths.copyAssets.base
  })
    .pipe(gulp.dest(paths.copyAssets.dest))
}
