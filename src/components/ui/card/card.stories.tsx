import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './card';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
};

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-[350px] p-6">
      <p>Simple card with just content</p>
    </Card>
  )
};

export const HeaderOnly: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>A card with just a header</CardDescription>
      </CardHeader>
    </Card>
  )
};

export const ContentOnly: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent>
        <p>A card with just content and padding</p>
      </CardContent>
    </Card>
  )
};

export const WithFooterActions: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card with Actions</CardTitle>
        <CardDescription>
          This card has action buttons in the footer
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Some content for the card</p>
      </CardContent>
      <CardFooter className="gap-2">
        <button className="rounded-md bg-primary px-4 py-2 text-white">
          Save
        </button>
        <button className="rounded-md border px-4 py-2">Cancel</button>
      </CardFooter>
    </Card>
  )
};
