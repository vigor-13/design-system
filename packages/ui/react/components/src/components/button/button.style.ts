import * as stylex from '@stylexjs/stylex';
import { tokens } from '@react-ui/theme/src/token.stylex.ts';

export const styles = stylex.create({
  button: {
    width: '100px',
    height: '100px',
    backgroundColor: tokens['vg.static.color.blue.100'],
  },
});
