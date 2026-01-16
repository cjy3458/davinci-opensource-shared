import type { Meta, StoryObj } from '@storybook/react';
import DecorateTitle from './DecorateTitle';

const meta: Meta<typeof DecorateTitle> = {
  title: 'UI/DecorateTitle',
  component: DecorateTitle,
  decorators: [
    (Story) => (
      <div className="p-8 flex flex-col items-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <DecorateTitle />
    </div>
  ),
};

export const Wide: Story = {
  render: () => (
    <div className="w-96">
      <DecorateTitle />
    </div>
  ),
};

export const Narrow: Story = {
  render: () => (
    <div className="w-32">
      <DecorateTitle />
    </div>
  ),
};
