import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  decorators: [
    (Story) => (
      <div className="p-8 max-w-md">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: '입력값',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
    },
    maxLength: {
      control: 'number',
      description: '최대 입력 길이',
    },
    autoFocus: {
      control: 'boolean',
      description: '자동 포커스 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper for controlled input
const InputWrapper = (args: {
  placeholder?: string;
  maxLength?: number;
  autoFocus?: boolean;
}) => {
  const [value, setValue] = useState('');
  return (
    <Input
      value={value}
      onChange={setValue}
      placeholder={args.placeholder}
      maxLength={args.maxLength}
      autoFocus={args.autoFocus}
      onEnter={() => alert(`입력값: ${value}`)}
    />
  );
};

export const Default: Story = {
  render: () => <InputWrapper placeholder="닉네임을 입력하세요" />,
};

export const WithMaxLength: Story = {
  args: {
    autoFocus: true
  },

  render: () => (
    <InputWrapper placeholder="최대 10자" maxLength={10} />
  )
};

export const RoomCode: Story = {
  render: () => (
    <InputWrapper placeholder="방 코드를 입력하세요" maxLength={6} />
  ),
};

export const WithValue: Story = {
  args: {
    value: '플레이어1',
    onChange: () => {},
    placeholder: '닉네임',
  },
};
