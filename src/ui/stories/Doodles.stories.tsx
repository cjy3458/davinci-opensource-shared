import type { Meta, StoryObj } from "@storybook/react";
import {
  JudyDoodle,
  LionDoodle,
  NickDoodle,
  SunDoodle,
  ScribbleDoodle,
  StarDoodle,
  BrushDoodle,
  PaletteDoodle,
} from "..";

const meta: Meta = {
  title: "UI/Doodles",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

// Wrapper to show doodles without their absolute positioning
const DoodleWrapper = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => (
  <div className="flex flex-col items-center gap-4 p-8 border rounded-lg bg-gray-50">
    <h3 className="text-lg font-bold text-gray-700">{name}</h3>
    <div className="relative w-48 h-48 bg-white rounded border flex items-center justify-center">
      <div className="[&>svg]:static [&>svg]:block [&>svg]:opacity-100">
        {children}
      </div>
    </div>
  </div>
);

export const AllDoodles: Story = {
  render: () => (
    <div className="p-8 grid grid-cols-2 md:grid-cols-3 gap-6">
      <DoodleWrapper name="JudyDoodle">
        <JudyDoodle />
      </DoodleWrapper>
      <DoodleWrapper name="LionDoodle">
        <LionDoodle />
      </DoodleWrapper>
      <DoodleWrapper name="NickDoodle">
        <NickDoodle />
      </DoodleWrapper>
      <DoodleWrapper name="SunDoodle">
        <SunDoodle />
      </DoodleWrapper>
      <DoodleWrapper name="ScribbleDoodle">
        <ScribbleDoodle />
      </DoodleWrapper>
      <DoodleWrapper name="StarDoodle">
        <StarDoodle />
      </DoodleWrapper>
      <DoodleWrapper name="BrushDoodle">
        <BrushDoodle />
      </DoodleWrapper>
      <DoodleWrapper name="PaletteDoodle">
        <PaletteDoodle />
      </DoodleWrapper>
    </div>
  ),
};

export const Judy: Story = {
  render: () => (
    <DoodleWrapper name="JudyDoodle">
      <JudyDoodle />
    </DoodleWrapper>
  ),
};

export const Lion: Story = {
  render: () => (
    <DoodleWrapper name="LionDoodle">
      <LionDoodle />
    </DoodleWrapper>
  ),
};

export const Sun: Story = {
  render: () => (
    <DoodleWrapper name="SunDoodle">
      <SunDoodle />
    </DoodleWrapper>
  ),
};

export const Scribble: Story = {
  render: () => (
    <DoodleWrapper name="ScribbleDoodle">
      <ScribbleDoodle />
    </DoodleWrapper>
  ),
};

export const Star: Story = {
  render: () => (
    <DoodleWrapper name="StarDoodle">
      <StarDoodle />
    </DoodleWrapper>
  ),
};

export const Brush: Story = {
  render: () => (
    <DoodleWrapper name="BrushDoodle">
      <BrushDoodle />
    </DoodleWrapper>
  ),
};

export const Palette: Story = {
  render: () => (
    <DoodleWrapper name="PaletteDoodle">
      <PaletteDoodle />
    </DoodleWrapper>
  ),
};

export const Nick: Story = {
  render: () => (
    <DoodleWrapper name="NickDoodle">
      <NickDoodle />
    </DoodleWrapper>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="relative w-full h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <JudyDoodle />
      <LionDoodle />
      <NickDoodle />
      <SunDoodle />
      <ScribbleDoodle />
      <StarDoodle />
      <BrushDoodle />
      <PaletteDoodle />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="font-handwriting text-6xl font-bold text-gray-800">
          Da Vinci
        </h1>
      </div>
    </div>
  ),
};
