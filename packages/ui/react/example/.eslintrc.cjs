module.exports = {
  extends: ['custom/typescript', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', 'babel.config.js'],
  plugins: ['react-refresh', '@stylexjs'],
  rules: {
    '@stylexjs/valid-styles': ['error', { ...options }],
  },
};
