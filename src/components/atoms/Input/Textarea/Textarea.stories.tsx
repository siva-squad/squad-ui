import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "./Textarea";

export default {
  component: Textarea,
  args: {
    value: undefined,
    onChange: action("onChange"),
    onFocus: action("onFocus"),
    onBlur: action("onBlur"),
    disabled: false,
    placeholder: "何か入力してください",
    rows: 4,
    maxLength: undefined,
    autoComplete: "on",
    showSuccess: false,
    state: undefined,
    resize: "vertical",
  },
  argTypes: {
    state: {
      control: {
        type: "select",
      },
      options: [undefined, "success", "error"],
    },
    resize: {
      control: {
        type: "select",
      },
      options: ["vertical", "horizontal", "both", "none"],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Textarea>;

export const Default: StoryObj<typeof Textarea> = {
  name: "未入力時",
  argTypes: {},
};

export const Inputed: StoryObj<typeof Textarea> = {
  name: "入力時",
  argTypes: {},
  args: {
    value: "Hello, World!",
  },
};

export const Success: StoryObj<typeof Textarea> = {
  name: "成功",
  argTypes: {},
  args: {
    showSuccess: true,
  },
};

export const Error: StoryObj<typeof Textarea> = {
  name: "エラー",
  argTypes: {},
  args: {
    state: "error",
  },
};

export const Disable: StoryObj<typeof Textarea> = {
  name: "非アクティブ",
  argTypes: {},
  args: {
    disabled: true,
  },
};
