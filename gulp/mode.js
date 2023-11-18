const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
  isProd,
  isDev,
};
