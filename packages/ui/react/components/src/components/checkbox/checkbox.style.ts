import * as stylex from '@stylexjs/stylex';
import { tokens } from '@react-ui/theme/src/token.stylex.ts';

export const styles = stylex.create({
  wrap: {
    display: 'inline-flex',
    alignItems: 'center',
  },

  checkbox: {
    display: 'none',
    color: {
      // 체크 박스 내부 SVG 아이콘 컬러
      ':not(:checked)+label': tokens['zefa.static.color.transparent'],
      ':checked+label': tokens['zefa.static.color.white'],

      // 라벨 텍스트 컬러
      ':disabled+label+label': tokens['zefa.semantic.color.content.disabled'],
    },
    backgroundColor: {
      // 체크 했을 경우 박스 컬러
      ':checked+label': tokens['zefa.semantic.color.primary.default'],
      // 비활성화 & 체크 했을 경우 박스 컬러
      ':checked:disabled+label': tokens['zefa.semantic.color.content.disabled'],
    },
    borderColor: {
      // 체크 했을 경우 보더 컬러
      ':checked+label': tokens['zefa.semantic.color.primary.default'],

      // 비활성화 했을 경우 보더 컬러
      ':disabled+label': tokens['zefa.semantic.color.content.disabled'],

      // 체크 & 비활성화 했을 경우 보더 컬러
      ':checked:disabled+label': tokens['zefa.semantic.color.content.disabled'],
    },
  },

  labelBox: {
    position: 'relative',
    width: '20px',
    height: '20px',
    border: '1px solid',
    borderColor: tokens['zefa.static.color.black'],
    borderRadius: '4px',
  },

  labelSvg: {
    pointerEvents: 'none',
    position: 'absolute',
    left: '0',
    top: '0',
    backgroundColor: tokens['zefa.static.color.transparent'],
    width: '20px',
    height: '20px',
    color: 'inherit',
  },

  labelText: {
    marginLeft: '8px',
    height: '14px',
  },
});
