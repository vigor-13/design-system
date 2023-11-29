module.exports = {
  extends: [
    'custom/typescript',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['vite.config.ts', 'dist'],
  plugins: ['react-refresh'],
};
