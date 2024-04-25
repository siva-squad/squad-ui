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
    description: {
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
    occupyErrorArea: {
      type: "boolean",
    },
  },
} satisfies Meta<typeof InputElement>;

export const Default: StoryObj<typeof InputElement> = {
  args: {
    htmlFor: "testId",
    label: "タイトル",
    description: "説明文が入ります",
    errorText: "エラーテキストが入ります",
    render: ({ htmlFor }) => (
      <InputText
        placeholder="プレイスホルダー"
        id={htmlFor}
      />
    ),
  },
  decorators: [
    (Story) => (
      <div className="max-w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export const OccupiedErrorArea = () => {
  return (
    <div>
      <h2 className="mb-2">Occupied</h2>
      <section className="flex items-end gap-x-2">
        <InputElement
          htmlFor="testId-1"
          label="タイトル-1"
          isRequired
          errorText="text"
          occupyErrorArea
          render={({ htmlFor }) => (
            <InputText
              placeholder="プレイスホルダー"
              id={htmlFor}
            />
          )}
        />
        <InputElement
          htmlFor="testId-2"
          label=""
          isRequired
          showRequired={false}
          occupyErrorArea
          render={({ htmlFor }) => (
            <InputText
              placeholder="プレイスホルダー"
              id={htmlFor}
            />
          )}
        />
      </section>
      <h2 className="mb-2 mt-6">Unoccupied</h2>
      <section className="flex items-end gap-x-2">
        <InputElement
          htmlFor="testId-1"
          label="タイトル-1"
          isRequired
          errorText="text"
          render={({ htmlFor }) => (
            <InputText
              placeholder="プレイスホルダー"
              id={htmlFor}
            />
          )}
        />
        <InputElement
          htmlFor="testId-2"
          label=""
          isRequired
          showRequired={false}
          render={({ htmlFor }) => (
            <InputText
              placeholder="プレイスホルダー"
              id={htmlFor}
            />
          )}
        />
      </section>
    </div>
  );
};

export const WithHtmlForDescription: StoryObj<typeof InputElement> = {
  args: {
    htmlFor: "testId",
    label: "タイトル",
    description: (
      <p className="text-xs leading-normal">
        <a
          href="#"
          className="text-primary-600"
        >
          リンク
        </a>
        が入ります
      </p>
    ),
    errorText: "エラーテキストが入ります",
    render: ({ htmlFor }) => (
      <InputText
        placeholder="プレイスホルダー"
        id={htmlFor}
      />
    ),
  },
  decorators: [
    (Story) => (
      <div className="max-w-[500px]">
        <Story />
      </div>
    ),
  ],
};
