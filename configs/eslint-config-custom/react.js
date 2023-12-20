module.exports = {
  overrides: [
    {
      files: ['*.ts?(x)', '*.js?(x)'],
      extends: ['plugin:react/recommended', 'prettier'],
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
};
