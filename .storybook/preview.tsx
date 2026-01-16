import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/styles/globals.css';

// SVG Filter for wavy scribble effect
const WavyFilter = () => (
  <svg
    style={{
      position: 'absolute',
      width: 0,
      height: 0,
      overflow: 'hidden',
    }}
    aria-hidden="true"
  >
    <defs>
      <filter id="wavy">
        <feTurbulence
          type="turbulence"
          baseFrequency="0.02"
          numOctaves="3"
          result="noise"
          seed="1"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="4"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
  </svg>
);

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <WavyFilter />
        <Story />
      </>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'gray', value: '#f5f5f5' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
};

export default preview;
