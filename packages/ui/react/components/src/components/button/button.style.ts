import * as stylex from '@stylexjs/stylex';
import { colors } from '../../tokens.stylex.ts';

export const styles = stylex.create({
  button: {
    width: '100px',
    height: '100px',
    backgroundColor: colors.color,
  },
});