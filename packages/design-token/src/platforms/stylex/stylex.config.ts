export const config = {
  buildPath: 'dist/',
  transformGroup: 'stylex',
  files: [
    {
      destination: 'token.stylex.js',
      format: 'javascript/module-flat',
    },
  ],
};
