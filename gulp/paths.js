const pathSrc = './source';
const pathDest = './build';

export default {
  root: pathDest,

  copyAssets: {
    src: [
      pathSrc + '/fonts/**/*.woff2',
      pathSrc + '/*.ico',
      pathSrc + '/*.webmanifest',
    ],
    watch: [
      pathSrc + '/fonts/**/*.woff2',
      pathSrc + '/*.ico',
      pathSrc + '/*.webmanifest',
    ],
    dest: pathDest,
    base: pathSrc
  },

  processMarkup: {
    src: [
      pathSrc + '/pug/*.pug',
      pathSrc + '/pug/articles/**/*.pug',
    ],
    watch: pathSrc + '/pug/**/*.pug',
    dest: pathDest,
    base: pathSrc + '/pug',
  },

  processStyles: {
    src: pathSrc + '/sass/*.scss',
    watch: pathSrc + '/sass/**/*.scss',
    dest: pathDest + '/css'
  },
};
