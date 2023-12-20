module.exports = {
  extends: ['custom/typescript', 'custom/react'],
  ignorePatterns: [
    'rollup.config.js',
    'babel.config.js',
    'node_modules',
    'dist',
  ],
  plugins: ['@stylexjs'],
};
