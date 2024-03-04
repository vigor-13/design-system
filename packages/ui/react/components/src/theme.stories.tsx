import React from 'react';
import { type StoryFn, type Meta } from '@storybook/react';
import { Button, Box, Badge, Checkbox } from './components';
import { VigorUIProvider } from './vigor-provider';
import { useColorMode } from '@react-ui/color-mode';

const meta: Meta = {
  title: 'React UI Component/ColorMode',
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <VigorUIProvider>
        <Story />
      </VigorUIProvider>
    ),
  ],
  parameters: {
    componentSubtitle: '라이트 모드 / 다크 모드',
    docs: {
      description: {
        component:
          '@react-ui/react 패키지의 VigorUIProvider 와 useColorMode Hook을 사용하면 컬러모드를 적용할 수 있다. (Overview 문서 참조)',
      },
    },
  },
};
export default meta;

/**
 * Basic
 */
export const basic: StoryFn = (): any => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box display="flex" alignItems="center">
        <Button
          onClick={() => {
            toggleColorMode();
          }}
        >
          {colorMode}
        </Button>
        <Badge ml="20px">{colorMode}</Badge>
        <Checkbox id="checkbox" ml="20px" label={colorMode} />
      </Box>
    </>
  );
};
basic.parameters = {};
basic.args = {};
basic.argTypes = {};
