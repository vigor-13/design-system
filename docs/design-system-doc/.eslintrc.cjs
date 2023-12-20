module.exports = {
  extends: [
    'custom/typescript',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: [
    'node_modules',
    'dist',
    'vite.config.ts',
    'tailwind.config.js',
    'postcss.config.js',
  ],
  plugins: ['react-refresh'],
};
