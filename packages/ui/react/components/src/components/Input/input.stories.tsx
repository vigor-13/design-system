import React from 'react';
import { type Meta, type StoryFn } from '@storybook/react';
import { Input, type InputProps } from './input';
import { Box } from '../box';

const meta: Meta = {
  title: 'React UI Component/Input',
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: '기본 인풋 컴포넌트',
  },
};
export default meta;

/**
 * Basic
 */
export const basic: StoryFn<InputProps> = (props): any => {
  return <Input {...props} />;
};
basic.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
};
basic.args = {
  label: '',
  disabled: false,
};
basic.argTypes = {
  label: {
    description: '인풋 라벨 텍스트',
  },
  type: {
    description: '인풋 타입',
    options: ['warning', 'error'],
    control: { type: 'radio' },
  },
  disabled: {
    description: '인풋 비활성화 여부',
    options: [true, false],
    table: {
      defaultValue: {
        summary: false,
      },
    },
  },
};

/**
 * Type
 */
export const type: StoryFn<InputProps> = (props): any => {
  return (
    <Box display="flex" alignItems="center">
      <Input mr="20px" type="warning" />
      <Input mr="20px" type="error" />
    </Box>
  );
};

/**
 * Disabled
 */
export const disabled: StoryFn<InputProps> = (props): any => {
  return (
    <Box display="flex" alignItems="center">
      <Input mr="20px" disabled />
      <Input mr="20px" label="Label" disabled />
    </Box>
  );
};

/**
 * With Label
 */
export const withLabel: StoryFn<InputProps> = (props): any => {
  return (
    <>
      <Box display="flex" alignItems="center">
        <Input mr="20px" label="Label" />
        <Input mr="20px" label="Label" disabled />
      </Box>
      <Box display="flex" alignItems="center" mt="20px">
        <Input mr="20px" label="Label" type="warning" />
        <Input mr="20px" label="Label" type="error" />
      </Box>
    </>
  );
};
