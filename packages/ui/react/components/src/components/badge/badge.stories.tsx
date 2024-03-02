import React from 'react';
import { type Meta, type StoryFn } from '@storybook/react';
import { Badge, type BadgeProps } from './badge';

const meta: Meta = {
  title: 'React UI Component/Badge',
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: '기본 배지 컴포넌트',
  },
};
export default meta;

/**
 * Basic
 */
export const basic: StoryFn<BadgeProps> = (props): any => {
  return <Badge {...props}>{props.children}</Badge>;
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
  status: 'default',
  children: 'Label',
};
basic.argTypes = {
  variant: {
    description: '배지 형태',
    options: ['primary', 'secondary', 'ghost'],
    control: { type: 'radio' },
    table: {
      defaultValue: {
        summary: 'primary',
      },
    },
  },
  status: {
    description: '배지 상태',
    options: ['default', 'warning', 'success', 'error', 'neutral'],
    control: { type: 'radio' },
    table: {
      defaultValue: {
        summary: 'default',
      },
    },
  },
  children: {
    description: '배지 라벨 텍스',
  },
};

/**
 * Primary
 */
export const primary: StoryFn<BadgeProps> = (): any => {
  return (
    <>
      <Badge mr="10px" variant="primary">
        Primary
      </Badge>
      <Badge mr="10px" variant="primary" status="warning">
        Primary
      </Badge>
      <Badge mr="10px" variant="primary" status="error">
        Primary
      </Badge>
      <Badge mr="10px" variant="primary" status="success">
        Primary
      </Badge>
      <Badge mr="10px" variant="primary" status="neutral">
        Primary
      </Badge>
    </>
  );
};

/**
 * Secondary
 */
export const secondary: StoryFn<BadgeProps> = (): any => {
  return (
    <>
      <Badge mr="10px" variant="secondary">
        Primary
      </Badge>
      <Badge mr="10px" variant="secondary" status="warning">
        Primary
      </Badge>
      <Badge mr="10px" variant="secondary" status="error">
        Primary
      </Badge>
      <Badge mr="10px" variant="secondary" status="success">
        Primary
      </Badge>
      <Badge mr="10px" variant="secondary" status="neutral">
        Primary
      </Badge>
    </>
  );
};

/**
 * Ghost
 */
export const ghost: StoryFn<BadgeProps> = (): any => {
  return (
    <>
      <Badge mr="10px" variant="ghost">
        Primary
      </Badge>
      <Badge mr="10px" variant="ghost" status="warning">
        Primary
      </Badge>
      <Badge mr="10px" variant="ghost" status="error">
        Primary
      </Badge>
      <Badge mr="10px" variant="ghost" status="success">
        Primary
      </Badge>
      <Badge mr="10px" variant="ghost" status="neutral">
        Primary
      </Badge>
    </>
  );
};
