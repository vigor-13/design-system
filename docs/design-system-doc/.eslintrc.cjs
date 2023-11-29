module.exports = {
  extends: [
    'custom/typescript',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: [
    'vite.config.ts',
    'dist',
    'tailwind.config.js',
    'postcss.config.js',
  ],
  plugins: ['react-refresh'],
};
