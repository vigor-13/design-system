import * as stylex from '@stylexjs/stylex';
import { tokens } from '@react-ui/theme/src/token.stylex.ts';

export const styles = stylex.create({
  wrap: {
    display: 'inline-block',
  },

  label: {
    display: 'block',
    fontSize: '14px',
    marginBottom: '2px',
    color: tokens['zefa.semantic.color.content.medium'],
  },
  diabedLabel: {
    color: tokens['zefa.semantic.color.content.disabled'],
  },

  input: {
    pointerEvents: {
      ':disabled': 'none',
    },
    transition: 'background-color 0.3s',
    outline: 'none',
    borderRadius: '8px',
    height: '38px',
    boxSizing: 'border-box',
    padding: '10px',
    border: '1px solid',
    backgroundColor: {
      default: tokens['zefa.static.color.transparent'],
      ':hover': tokens['zefa.static.color.gray.20'],
      ':active': tokens['zefa.static.color.gray.20'],
      ':focus': tokens['zefa.static.color.white'],
      ':disabled': tokens['zefa.static.color.transparent'],
    },
    borderColor: {
      default: tokens['zefa.semantic.color.content.light'],
      ':active': tokens['zefa.static.color.black'],
      ':focus': tokens['zefa.semantic.color.primary.default'],
      ':disabled': tokens['zefa.semantic.color.content.disabled'],
    },
    borderWidth: {
      default: '1px',
      ':active': '2px',
      ':focus': '2px',
    },
    fontSize: {
      default: '14px',
      '::placeholder': '14px',
    },
    color: {
      default: tokens['zefa.semantic.color.content.light'],
      '::placeholder': tokens['zefa.semantic.color.content.light'],
      ':focus': tokens['zefa.static.color.black'],
    },
  },
  disabledInput: {
    color: {
      default: tokens['zefa.semantic.color.content.disabled'],
      '::placeholder': tokens['zefa.semantic.color.content.disabled'],
    },
  },

  warning: {
    borderColor: {
      default: tokens['zefa.static.color.yellow.120'],
      ':hover': tokens['zefa.static.color.yellow.140'],
      ':active': tokens['zefa.static.color.yellow.160'],
      ':focus': tokens['zefa.semantic.color.primary.default'],
    },
  },
  error: {
    borderColor: {
      default: tokens['zefa.static.color.red.120'],
      ':hover': tokens['zefa.static.color.red.140'],
      ':active': tokens['zefa.static.color.red.160'],
      ':focus': tokens['zefa.semantic.color.primary.default'],
    },
  },

  typeDescWrapp: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px 0 0 0',
  },
  typeDescText: {
    fontSize: '12px',
    padding: 0,
    margin: 0,
  },
  typeDescSvg: {
    width: '13px',
    height: '13px',
    margin: '0 5px 0 0',
  },
  typeDescSvgWarning: {
    color: tokens['zefa.static.color.yellow.120'],
  },
  typeDescSvgError: {
    color: tokens['zefa.static.color.red.120'],
  },
});
