import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import '@react-ui/core/dist/style/stylex.css';

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Design Token',
          ['Overview', 'Color'],
          'React UI Component',
          ['Overview', 'Core', 'Box', 'Button'],
        ],
      },
    },
  },
};

export default preview;
