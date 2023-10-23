import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { InputNumber } from "./InputNumber";

export default {
  component: InputNumber,
  args: {
    id: "ID",
    name: "name",
    min: 0,
    max: 100,
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
} satisfies Meta<typeof InputNumber>;

export const Default: StoryObj<typeof InputNumber> = {
  name: "未入力時",
  args: {
    defaultValue: 0,
  },
};

export const Input: StoryObj<typeof InputNumber> = {
  name: "入力時",
  argTypes: {},
  args: {
    defaultValue: 10,
  },
};

export const Error: StoryObj<typeof InputNumber> = {
  name: "エラー時",
  args: {
    ...Input.args,
    state: "error",
  },
};

export const ShowSuccess: StoryObj<typeof InputNumber> = {
  name: "成功表示あり",
  args: {
    ...Input.args,
    state: undefined,
    showSuccess: true,
  },
};

export const Disabled: StoryObj<typeof InputNumber> = {
  name: "入力不可",
  args: {
    disabled: true,
  },
};
