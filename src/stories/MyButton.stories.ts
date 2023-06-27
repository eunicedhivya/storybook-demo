import type { Meta, StoryObj } from '@storybook/react';

import { MyButton } from '../components/mybutton/MyButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/MyButton',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
        options: ['primary', 'secondary', 'tertiary'],
        control: { type: 'select' },
      },
  
  },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'MyButton',
  },
};

export const Secondary: Story = {
  args: {
    label: 'MyButton',
    variant: 'secondary',
  },
};
export const Tertiary: Story = {
  args: {
    label: 'MyButton',
    variant: 'tertiary',
  },
};

