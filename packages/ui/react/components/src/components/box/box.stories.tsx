import React from 'react';
import { type Meta, type StoryFn } from '@storybook/react';
import { Box, type BoxProps } from './box';
import { Button } from '../button';

const meta: Meta = {
  title: 'React UI Component/Box',
  tags: ['autodocs'],
  decorators: [(Story: any) => <Story />],
  parameters: {
    componentSubtitle:
      '가장 기본이 되는 컴포넌트다. HTML의 div 엘리먼트 역할을 한다. 여러 유틸리티 스타일 프로퍼티 및 stylex 스타일 객체를 적용할 수 있다.',
  },
};
export default meta;

/**
 * Basic
 */
export const basic: StoryFn<BoxProps> = (props): any => {
  return (
    <Box {...props} bg="coral" w="200px" p="20px">
      <Button w="100%">Button Label</Button>
    </Box>
  );
};
basic.parameters = {};
basic.args = {};
basic.argTypes = {};
