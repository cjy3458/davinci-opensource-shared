import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import CommonBtn from './CommonBtn';

const meta: Meta<typeof CommonBtn> = {
  title: 'UI/CommonBtn',
  component: CommonBtn,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="p-8 max-w-md">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['scribble', 'radius'],
      description: '버튼 스타일 변형',
    },
    color: {
      control: 'select',
      options: ['blue', 'indigo', 'red', 'green', 'gray'],
      description: '버튼 색상 (radius variant에서만 적용)',
    },
    icon: {
      control: 'text',
      description: 'Material Symbols 아이콘 이름',
    },
    text: {
      control: 'text',
      description: '버튼 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    path: {
      control: 'text',
      description: '클릭 시 이동할 경로',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Scribble: Story = {
  args: {
    icon: 'play_arrow',
    text: '게임 시작',
    variant: 'scribble',
  },
};

export const ScribbleDisabled: Story = {
  args: {
    icon: 'play_arrow',
    text: '게임 시작',
    variant: 'scribble',
    disabled: true,
  },
};

export const RadiusBlue: Story = {
  args: {
    icon: 'add',
    text: '방 만들기',
    variant: 'radius',
    color: 'blue',
  },
};

export const RadiusIndigo: Story = {
  args: {
    icon: 'login',
    text: '참여하기',
    variant: 'radius',
    color: 'indigo',
  },
};

export const RadiusRed: Story = {
  args: {
    icon: 'delete',
    text: '삭제',
    variant: 'radius',
    color: 'red',
  },
};

export const RadiusGreen: Story = {
  args: {
    icon: 'check',
    text: '확인',
    variant: 'radius',
    color: 'green',
  },
};

export const RadiusGray: Story = {
  args: {
    icon: 'close',
    text: '취소',
    variant: 'radius',
    color: 'gray',
  },
};

export const WithPath: Story = {
  args: {
    icon: 'home',
    text: '홈으로',
    variant: 'scribble',
    path: '/',
  },
};
