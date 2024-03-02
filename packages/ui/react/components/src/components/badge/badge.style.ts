import * as stylex from '@stylexjs/stylex';
import { tokens } from '@react-ui/theme/src/token.stylex.ts';

export const styles = stylex.create({
  common: {
    lineHeight: 1,
    boxSizing: 'border-box',
    minWidth: '47px',
    display: 'inline-block',
    padding: '7px 4px',
    paddingTop: '8px',
    borderRadius: '32px',
    textAlign: 'center',
    fontSize: '12px',
    verticalAlign: 'middle',
    transition: 'all 0.3s',
  },

  /* variant */
  primary: {
    color: tokens['zefa.static.color.white'],
  },
  secondary: {
    border: '1px solid',
    backgroundColor: tokens['zefa.static.color.transparent'],
    color: tokens['zefa.semantic.color.content.medium'],
  },
  ghost: {
    color: tokens['zefa.semantic.color.content.medium'],
  },
});

export const primaryStyles = stylex.create({
  default: {
    backgroundColor: tokens['zefa.semantic.color.primary.default'],
  },
  warning: {
    backgroundColor: tokens['zefa.semantic.color.warning.default'],
    color: tokens['zefa.static.color.black'],
  },
  success: {
    backgroundColor: tokens['zefa.semantic.color.success.default'],
  },
  error: {
    backgroundColor: tokens['zefa.semantic.color.error.default'],
  },
  neutral: {
    backgroundColor: tokens['zefa.semantic.color.neutral.default'],
  },
});
export const secondaryStyles = stylex.create({
  default: {
    borderColor: tokens['zefa.semantic.color.primary.default'],
  },
  warning: {
    borderColor: tokens['zefa.semantic.color.warning.default'],
  },
  success: {
    borderColor: tokens['zefa.semantic.color.success.default'],
  },
  error: {
    borderColor: tokens['zefa.semantic.color.error.default'],
  },
  neutral: {
    borderColor: tokens['zefa.semantic.color.neutral.default'],
  },
});
export const ghostStyles = stylex.create({
  default: {
    backgroundColor: '#EBE1F3',
  },
  warning: {
    backgroundColor: '#F2F0DD',
  },
  success: {
    backgroundColor: '#DEEBE1',
  },
  error: {
    backgroundColor: '#F4DDDD',
  },
  neutral: {
    backgroundColor: '#EEEEEE',
  },
});
