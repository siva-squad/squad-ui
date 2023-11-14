import { InputText } from "@components/atoms";
import type { Meta, StoryObj } from "@storybook/react";

import { InputElement } from "./InputElement";

export default {
  component: InputElement,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    title: {
      type: "string",
    },
    errorText: {
      type: "string",
    },
    descriptionText: {
      type: "string",
    },
    showRequired: {
      type: "boolean",
    },
    isRequired: {
      type: "boolean",
    },
  },
} satisfies Meta<typeof InputElement>;

export const Default: StoryObj<typeof InputElement> = {
  args: {
    title: "タイトル",
    descriptionText: "説明文が入ります",
    errorText: "エラーテキストが入ります",
    children: <InputText placeholder="プレイスホルダー" />,
    showRequired: true,
    isRequired: true,
  },
  decorators: [
    (Story) => (
      <div className="max-w-[500px]">
        <Story />
      </div>
    ),
  ],
};
