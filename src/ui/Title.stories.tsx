import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';
import DecorateTitle from './DecorateTitle';

const meta: Meta<typeof Title> = {
  title: 'UI/Title',
  component: Title,
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
  argTypes: {
    title: {
      control: 'text',
      description: '타이틀 텍스트',
    },
    fontSize: {
      control: 'text',
      description: 'Tailwind 폰트 크기 클래스',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    title: 'Da Vinci',
    fontSize: 'text-2xl',
  },
};

export const Medium: Story = {
  args: {
    title: 'Da Vinci',
    fontSize: 'text-4xl',
  },
};

export const Large: Story = {
  args: {
    title: 'Da Vinci',
    fontSize: 'text-6xl',
  },
};

export const ExtraLarge: Story = {
  args: {
    title: 'We Are All Da Vinci',
    fontSize: 'text-8xl',
  },
};

export const Korean: Story = {
  args: {
    title: '우리 모두 다빈치',
    fontSize: 'text-5xl',
  },
};

// Combined with DecorateTitle
const TitleWithDecoration = () => (
  <div className="flex flex-col items-center gap-2">
    <Title title="Da Vinci" fontSize="text-6xl" />
    <div className="w-64">
      <DecorateTitle />
    </div>
  </div>
);

export const WithDecoration: Story = {
  render: () => <TitleWithDecoration />,
};
