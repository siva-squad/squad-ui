import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { InputText } from "./InputText";

export default {
  component: InputText,
  args: {
    name: "name",
    type: "text",
    maxLength: undefined,
    autoComplete: "off",
    placeholder: "プレースホルダー",
    disabled: false,
    state: undefined,
    showSuccess: false,
    onChange: action("onChange"),
    onFocus: action("onFocus"),
    onBlur: action("onBlur"),
  },
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["email", "password", "search", "text"],
      defaultValue: "text",
    },
    state: {
      control: {
        type: "select",
      },
      options: ["error", undefined],
    },
    onChange: { action: "onChange" },
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof InputText>;

export const Default: StoryObj<typeof InputText> = {
  name: "未入力時",
  argTypes: {},
  args: {
    defaultValue: "default",
  },
};

export const Input: StoryObj<typeof InputText> = {
  name: "入力時",
  argTypes: {},
  args: {
    value: "テスト",
  },
};

export const Error: StoryObj<typeof InputText> = {
  name: "エラー時",
  argTypes: {},
  args: {
    ...Input.args,
    state: "error",
  },
};

export const ShowSuccess: StoryObj<typeof InputText> = {
  name: "成功表示あり",
  argTypes: {},
  args: {
    ...Input.args,
    state: undefined,
    showSuccess: true,
  },
};

export const Disabled: StoryObj<typeof InputText> = {
  name: "入力不可",
  argTypes: {},
  args: {
    disabled: true,
  },
};
