import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { InputText } from "./InputText";
import { COLORS } from "@/src/const/colors";

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
    label: undefined,
    badgeColor: "lightGray",
    badgeText: undefined,
    helperText: undefined,
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
    badgeColor: {
      control: { type: "select" },
      options: COLORS,
    },
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

export const DefaultWithLabel: StoryObj<typeof InputText> = {
  name: "ラベル付き",
  argTypes: {},
  args: {
    id: "id",
    label: "ラベル",
  },
};

export const DefaultWithBadge: StoryObj<typeof InputText> = {
  name: "バッチ付き",
  argTypes: {},
  args: {
    id: "id",
    badgeText: "バッチ",
  },
};

export const DefaultWithHelperText: StoryObj<typeof InputText> = {
  name: "ヘルパーテキスト付き",
  argTypes: {},
  args: {
    id: "id",
    helperText: "ヘルパーテキスト",
  },
};

export const DefaultWithLabelAndBadge: StoryObj<typeof InputText> = {
  name: "ラベル&バッチ付き",
  argTypes: {},
  args: {
    id: "id",
    label: "ラベル",
    badgeText: "任意",
  },
};

export const DefaultWithLabelAndHelperText: StoryObj<typeof InputText> = {
  name: "ラベル&ヘルパーテキスト付き",
  argTypes: {},
  args: {
    id: "id",
    label: "ラベル",
    helperText: "ヘルパーテキスト",
  },
};

export const DefaultWithBadgeAndHelperText: StoryObj<typeof InputText> = {
  name: "バッチ&ヘルパーテキスト付き",
  argTypes: {},
  args: {
    id: "id",
    badgeText: "任意",
    helperText: "ヘルパーテキスト",
  },
};

export const DefaultWithLabelAndBadgeAndHelperText: StoryObj<typeof InputText> = {
  name: "ラベル&バッチ&ヘルパーテキスト付き",
  argTypes: {},
  args: {
    id: "id",
    label: "ラベル",
    badgeText: "任意",
    helperText: "ヘルパーテキスト",
  },
};
