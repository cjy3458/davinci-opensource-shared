import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { BaseModal, Input } from '..';

const meta: Meta<typeof BaseModal> = {
  title: 'UI/BaseModal',
  component: BaseModal,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ minHeight: '500px', position: 'relative' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: true,
        iframeHeight: 500,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '모달 열림 여부',
    },
    title: {
      control: 'text',
      description: '모달 제목',
    },
    confirmText: {
      control: 'text',
      description: '확인 버튼 텍스트',
    },
    confirmDisabled: {
      control: 'boolean',
      description: '확인 버튼 비활성화 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: '알림',
    confirmText: '확인',
    onClose: () => {},
    onConfirm: () => alert('확인 클릭!'),
    children: <p className="text-center text-gray-600">모달 내용입니다.</p>,
  },
};

export const NicknameInput: Story = {
  args: {
    isOpen: true,
    title: '닉네임 입력',
    confirmText: '입장하기',
    onClose: () => {},
    onConfirm: () => {},
    children: (
      <Input
        value=""
        onChange={() => {}}
        placeholder="닉네임을 입력하세요"
        maxLength={10}
      />
    ),
  },
};

export const ConfirmDisabled: Story = {
  args: {
    isOpen: true,
    title: '닉네임 입력',
    confirmText: '입장하기',
    confirmDisabled: true,
    onClose: () => {},
    onConfirm: () => {},
    children: (
      <Input
        value=""
        onChange={() => {}}
        placeholder="닉네임을 입력하세요"
        maxLength={10}
      />
    ),
  },
};

// Interactive example
const InteractiveModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [nickname, setNickname] = useState('');

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="m-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        모달 열기
      </button>
      <BaseModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="닉네임 입력"
        confirmText="입장하기"
        confirmDisabled={!nickname.trim()}
        onConfirm={() => {
          alert(`닉네임: ${nickname}`);
          setIsOpen(false);
        }}
      >
        <Input
          value={nickname}
          onChange={setNickname}
          placeholder="닉네임을 입력하세요"
          maxLength={10}
        />
      </BaseModal>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveModal />,
};
