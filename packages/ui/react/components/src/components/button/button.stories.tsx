import React from 'react';
import { type Meta, type StoryFn } from '@storybook/react';
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
  parameters: {
    componentSubtitle: '기본 버튼 컴포넌트',
  },
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
      <Button mr="10px" variant="primary">
        Primary
      </Button>
      <Button mr="10px" variant="secondary">
        Secondary
      </Button>
      <Button mr="10px" variant="ghost">
        Ghost
      </Button>
    </>
  );
};

/**
 * Disabled
 */
export const Disabled: StoryFn<ButtonProps> = (): any => {
  return (
    <>
      <Button mr="10px" disabled variant="primary">
        Primary
      </Button>
      <Button mr="10px" disabled variant="secondary">
        Secondary
      </Button>
      <Button mr="10px" disabled variant="ghost">
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
      <Button mr="10px" size="md">
        Medium Button
      </Button>
      <Button mr="10px" size="sm">
        Small Button
      </Button>
    </>
  );
};
