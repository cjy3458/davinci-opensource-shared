import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast } from '..';

const meta: Meta<typeof Toast> = {
  title: 'UI/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: '토스트 메시지',
    },
    type: {
      control: 'select',
      options: ['success', 'error', 'info'],
      description: '토스트 타입',
    },
    duration: {
      control: 'number',
      description: '표시 시간 (ms)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    message: '성공적으로 저장되었습니다.',
    type: 'success',
    onClose: () => {},
  },
};

export const Error: Story = {
  args: {
    message: '오류가 발생했습니다.',
    type: 'error',
    onClose: () => {},
  },
};

export const Info: Story = {
  args: {
    message: '새로운 알림이 있습니다.',
    type: 'info',
    onClose: () => {},
  },
};

const InteractiveToast = () => {
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);

  const showToast = (type: 'success' | 'error' | 'info') => {
    const messages = {
      success: '성공적으로 완료되었습니다!',
      error: '오류가 발생했습니다.',
      info: '새로운 정보가 있습니다.',
    };
    setToast({ message: messages[type], type });
  };

  return (
    <div className="p-8 flex gap-4">
      <button
        onClick={() => showToast('success')}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Success Toast
      </button>
      <button
        onClick={() => showToast('error')}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Error Toast
      </button>
      <button
        onClick={() => showToast('info')}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Info Toast
      </button>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
          duration={3000}
        />
      )}
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveToast />,
};
