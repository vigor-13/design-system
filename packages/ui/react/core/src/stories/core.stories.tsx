import React from 'react';
import { type StoryFn, type Meta } from '@storybook/react';
import { vigor, type HTMLVigorProps } from '../system';

const meta: Meta = {
  title: 'React UI Component/Core',
  tags: ['autodocs'],
};
export default meta;

/**
 * Basic
 */
export const basic: StoryFn<HTMLVigorProps<'div'>> = (props): any => (
  <vigor.div {...props}>
    The mind is everything. What we think, we become.
  </vigor.div>
);
basic.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
};
basic.args = {};
basic.argTypes = {};

/**
 * As
 */
export const as: StoryFn<HTMLVigorProps<'div'>> = (): any => {
  return (
    <>
      <vigor.div as="a">as `a`</vigor.div>
      <vigor.div as="div">as `div`</vigor.div>
      <vigor.div as="p">as `p`</vigor.div>
      <vigor.div as="button">as `button`</vigor.div>
    </>
  );
};
