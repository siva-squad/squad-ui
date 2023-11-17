import { InputText } from "@components/atoms";
import type { Meta, StoryObj } from "@storybook/react";

import { InputElement } from "./InputElement";

export default {
  component: InputElement,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    label: {
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
    showLabel: {
      type: "boolean",
    },
    isRequired: {
      type: "boolean",
    },
    requiredText: {
      type: "string",
    },
    optionalText: {
      type: "string",
    },
    htmlFor: {
      type: "string",
    },
    render: {
      type: "function",
    },
  },
} satisfies Meta<typeof InputElement>;

export const Default: StoryObj<typeof InputElement> = {
  args: {
    htmlFor: "testId",
    label: "タイトル",
    descriptionText: "説明文が入ります",
    errorText: "エラーテキストが入ります",
    render: ({ htmlFor }) => (
      <InputText
        placeholder="プレイスホルダー"
        id={htmlFor}
      />
    ),
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
