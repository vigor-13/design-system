import * as stylex from '@stylexjs/stylex';

// A constant can be used to avoid repeating the media query
export const DARK = '@media (prefers-color-scheme: dark)';

export const colors = stylex.defineVars({
  primaryText: { default: 'black', [DARK]: 'white' },
  secondaryText: { default: '#333', [DARK]: '#ccc' },
  accent: { default: 'blue', [DARK]: 'lightblue' },
  background: { default: 'red', [DARK]: 'black' },
  lineColor: { default: 'gray', [DARK]: 'lightgray' },
  borderRadius: '4px',
  fontFamily: 'system-ui, sans-serif',
  fontSize: '16px',
});
