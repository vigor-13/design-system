import React from 'react';
import { type Meta } from '@storybook/react';
import { Button } from './button';

const meta: Meta = {
  title: 'React UI Component/Button',
  tags: ['autodocs'],
};

export const RenderElement = (): any => <Button>Button</Button>;

export default meta;
