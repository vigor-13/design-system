import React from 'react';
import { type Meta, type StoryFn } from '@storybook/react';
import { Checkbox, type CheckboxProps } from './checkbox';

const meta: Meta = {
  title: 'React UI Component/Checkbox',
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: '기본 체크박스 컴포넌트',
  },
};
export default meta;

/**
 * Basic
 */
export const basic: StoryFn<CheckboxProps> = (props): any => {
  return <Checkbox {...props} />;
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
  checked: false,
};
basic.argTypes = {
  disabled: {
    description: '체크박스 비활성화 여부',
    options: [true, false],
    table: {
      defaultValue: {
        summary: false,
      },
    },
  },
  checked: {
    description: '체크박스 체크 여부',
    options: [true, false],
    table: {
      defaultValue: {
        summary: false,
      },
    },
  },
  label: {
    description: '체크박스 라벨 텍스트',
  },
};

/**
 * Checked
 */
export const checked: StoryFn<CheckboxProps> = (props): any => {
  return (
    <>
      <Checkbox mr="20px" /> <Checkbox checked />
    </>
  );
};

/**
 * Disabled
 */
export const disabled: StoryFn<CheckboxProps> = (props): any => {
  return (
    <>
      <Checkbox mr="20px" disabled /> <Checkbox checked disabled />
    </>
  );
};

/**
 * With Label
 */
export const withLabel: StoryFn<CheckboxProps> = (props): any => {
  return (
    <>
      <Checkbox mr="20px" label="Label" />
      <Checkbox mr="20px" checked label="Label" />
      <Checkbox mr="20px" disabled label="Label" />
      <Checkbox checked disabled label="Label" />
    </>
  );
};
