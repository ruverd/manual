import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button Text'
  }
};

export const AsLink: Story = {
  args: {
    asChild: true,
    children: <a href="#">Link Button</a>
  }
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true
  }
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
        Button with Icon
      </>
    )
  }
};
