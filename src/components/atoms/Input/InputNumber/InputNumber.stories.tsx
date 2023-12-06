import { COLORS } from "@const/colors";
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
    label: undefined,
    badgeColor: "lightGray",
    badgeText: undefined,
    helperText: undefined,
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
    badgeColor: {
      control: { type: "select" },
      options: COLORS,
    },
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

export const DefaultWithLabel: StoryObj<typeof InputNumber> = {
  name: "ラベル付き",
  argTypes: {},
  args: {
    id: "id",
    label: "ラベル",
  },
};

export const DefaultWithBadge: StoryObj<typeof InputNumber> = {
  name: "バッチ付き",
  argTypes: {},
  args: {
    id: "id",
    badgeText: "バッチ",
  },
};

export const DefaultWithHelperText: StoryObj<typeof InputNumber> = {
  name: "ヘルパーテキスト付き",
  argTypes: {},
  args: {
    id: "id",
    helperText: "ヘルパーテキスト",
  },
};

export const DefaultWithLabelAndBadge: StoryObj<typeof InputNumber> = {
  name: "ラベル&バッチ付き",
  argTypes: {},
  args: {
    id: "id",
    label: "ラベル",
    badgeText: "任意",
  },
};

export const DefaultWithLabelAndHelperText: StoryObj<typeof InputNumber> = {
  name: "ラベル&ヘルパーテキスト付き",
  argTypes: {},
  args: {
    id: "id",
    label: "ラベル",
    helperText: "ヘルパーテキスト",
  },
};

export const DefaultWithBadgeAndHelperText: StoryObj<typeof InputNumber> = {
  name: "バッチ&ヘルパーテキスト付き",
  argTypes: {},
  args: {
    id: "id",
    badgeText: "任意",
    helperText: "ヘルパーテキスト",
  },
};

export const DefaultWithLabelAndBadgeAndHelperText: StoryObj<typeof InputNumber> = {
  name: "ラベル&バッチ&ヘルパーテキスト付き",
  argTypes: {},
  args: {
    id: "id",
    label: "ラベル",
    badgeText: "任意",
    helperText: "ヘルパーテキスト",
  },
};
