import React from 'react';
import { type StoryObj, type Meta, type StoryFn } from '@storybook/react';
import { Button, type ButtonProps } from './button';

const meta: Meta = {
  title: 'React UI Component/Button',
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div>
        <Story />
      </div>
    ),
  ],
};
export default meta;

/**
 * Basic
 */
export const basic: StoryFn<ButtonProps> = (props): any => {
  return <Button {...props}>{props.children}</Button>;
};
basic.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
};
basic.args = {
  variant: 'primary',
  size: 'md',
  children: 'Button',
  disabled: false,
};
basic.argTypes = {
  variant: {
    description: '버튼 형태',
    options: ['primary', 'secondary', 'ghost'],
    control: { type: 'radio' },
    table: {
      defaultValue: {
        summary: 'primary',
      },
    },
  },
  size: {
    description: '버튼 사이즈',
    options: ['md', 'sm'],
    control: { type: 'radio' },
    table: {
      defaultValue: {
        summary: 'md',
      },
    },
  },
  disabled: {
    options: [true, false],
    table: {
      defaultValue: {
        summary: false,
      },
    },
  },
  children: {
    description: '버튼 텍스트',
  },
};

/**
 * Variants
 */
export const variants: StoryFn<ButtonProps> = (): any => {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </>
  );
};

/**
 * Disabled
 */
export const Disabled: StoryFn<ButtonProps> = (): any => {
  return (
    <>
      <Button disabled variant="primary">
        Primary
      </Button>
      <Button disabled variant="secondary">
        Secondary
      </Button>
      <Button disabled variant="ghost">
        Ghost
      </Button>
    </>
  );
};

/**
 * Sizes
 */
export const sizes: StoryFn<ButtonProps> = (): any => {
  return (
    <>
      <Button size="md">Medium Button</Button>
      <Button size="sm">Small Button</Button>
    </>
  );
};
