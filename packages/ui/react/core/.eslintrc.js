module.exports = {
  extends: ['custom/typescript', 'custom/react'],
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
  },
};
