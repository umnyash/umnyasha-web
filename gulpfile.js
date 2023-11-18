import gulp from 'gulp';

// Configuration
import mode from './gulp/mode.js';
import paths from './gulp/paths.js';

// Plugins
import browser from 'browser-sync';

// Tasks
import copyAssets from './gulp/tasks/copyAssets.js';
import deleteBuild from './gulp/tasks/deleteBuild.js';
import processMarkup from './gulp/tasks/processMarkup.js';
import processStyles from './gulp/tasks/processStyles.js'

export function startServer(done) {
  browser.init({
    server: {
      baseDir: paths.root,
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

function watchFiles() {
  gulp.watch(paths.processStyles.watch, processStyles);
  gulp.watch(paths.processMarkup.watch, processMarkup);
}

function compileProject (done) {
  gulp.parallel(
    copyAssets,
    processMarkup,
    processStyles,
  )(done);
}

function build (done) {
  gulp.series(
    deleteBuild,
    compileProject
  )(done);
}

function runDev (done) {
  gulp.series(
    build,
    startServer,
    watchFiles
  )(done);
}

export default mode.isProd ? build : runDev;
