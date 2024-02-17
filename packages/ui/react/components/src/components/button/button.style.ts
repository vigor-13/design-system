import * as stylex from '@stylexjs/stylex';
import { tokens } from '@react-ui/theme/src/token.stylex.ts';

export const styles = stylex.create({
  reset: {
    border: 'none',
    margin: 0,
    padding: 0,
    width: 'auto',
    background: 'transparent',
    color: 'inherit',
    font: 'inherit',
    lineHeight: 'inherit',
  },
  common: {
    borderRadius: '6px',
    transition: 'all 0.3s',
    pointerEvents: {
      ':disabled': 'none',
    },
  },

  /* size */
  md: {
    padding: '10px 16px',
  },
  sm: {
    padding: '6px 16px',
  },

  /* variant */
  primary: {
    backgroundColor: {
      default: tokens['zefa.semantic.color.primary.default'],
      ':hover': tokens['zefa.semantic.color.primary.hover'],
      ':active': tokens['zefa.semantic.color.primary.press'],
      ':disabled': tokens['zefa.semantic.color.background.disabled'],
    },
    color: {
      default: tokens['zefa.static.color.white'],
      ':disabled': tokens['zefa.semantic.color.content.disabled'],
    },
  },
  secondary: {
    backgroundColor: {
      default: tokens['zefa.static.color.white'],
      ':hover': '#F1ECF5',
      ':active': '#EBE1F3',
      ':disabled': '#F6F6F6',
    },
    border: '1px solid',
    borderColor: {
      default: tokens['zefa.semantic.color.primary.default'],
      ':disabled': tokens['zefa.semantic.color.content.disabled'],
    },
    color: {
      default: tokens['zefa.semantic.color.primary.default'],
      ':disabled': tokens['zefa.semantic.color.content.disabled'],
    },
  },
  ghost: {
    backgroundColor: {
      default: tokens['zefa.static.color.white'],
      ':hover': '#F1ECF5',
      ':active': '#EBE1F3',
      ':disabled': tokens['zefa.static.color.transparent'],
    },
    color: {
      default: tokens['zefa.semantic.color.primary.default'],
      ':disabled': tokens['zefa.semantic.color.content.disabled'],
    },
  },
});
