import React from 'react';
import { ColorItem } from '@storybook/blocks';
import tokens from 'design-token/dist/token.js';
const zefa = tokens.zefa;

export const StaticColorTokens = (): React.ReactNode => {
  return Object.entries(zefa.static.color).map(([key, token]: any) => {
    if (!token.value) {
      const colorsObjet = {};
      Object.entries(token).forEach(([k, t]) => {
        colorsObjet[k] = t.value;
      });

      return (
        <ColorItem
          title={token[0].path.join('.')}
          subtitle={key}
          colors={colorsObjet}
        />
      );
    }

    return (
      <ColorItem
        title={token.path.join('.')}
        subtitle={token.description}
        colors={{ [key]: token.value }}
      />
    );
  });
};

export const SemanticColorTokens = (): React.ReactNode => {
  return Object.entries(zefa.semantic.color).map(([key, token]: any) => {
    if (token.value) {
      return (
        <ColorItem
          title={token.path.join('.')}
          subtitle={token.description}
          colors={{ [key]: token.value }}
        />
      );
    } else {
      const colorsObjet = {};
      Object.entries(token).forEach(([k, t]) => {
        if (!t.value) {
          console.log(t);
          Object.entries(t).forEach(([k1, t1]) => {
            console.log(t1);
            colorsObjet[`${k}-${k1}`] = t1.value;
          });
        } else {
          colorsObjet[k] = t.value;
        }
      });
      return (
        <ColorItem
          title={token.default.path.join('.')}
          subtitle={key}
          colors={colorsObjet}
        />
      );
    }
  });
};
