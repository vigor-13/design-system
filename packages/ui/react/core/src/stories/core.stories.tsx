import React from 'react';
import { type Meta } from '@storybook/react';
import { vigor } from '../system';

const meta: Meta = {
  title: 'React UI Component/Core',
  tags: ['autodocs'],
};

export const RenderElement = (): any => (
  <vigor.p>The mind is everything. What we think, we become.</vigor.p>
);

export default meta;
