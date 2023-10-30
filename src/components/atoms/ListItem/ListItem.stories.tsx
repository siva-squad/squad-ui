import { useRef } from "react";
import { FolderIcon as FolderIconOutline } from "@heroicons/react/24/outline";
import { FolderIcon as FolderIconSolid } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { ListItem } from "./ListItem";

export default {
  component: ListItem,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    description: {
      type: "string",
    },
    hasChevron: {
      type: "boolean",
      defaultValue: true,
    },
    href: {
      type: "string",
    },
    icon: {
      type: "symbol",
    },
    isDisabled: {
      type: "boolean",
      defaultValue: false,
    },
    isSelected: {
      type: "boolean",
      defaultValue: false,
    },
    onClick: {
      type: "function",
    },
    selectedIcon: {
      type: "symbol",
    },
    title: {
      type: "string",
    },
    size: {
      type: "string",
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
  },
} satisfies Meta<typeof ListItem>;

export const Dropdown: StoryObj<typeof ListItem> = {
  args: {
    title: "ダッシュボード",
  },
};

export const Header: StoryObj<typeof ListItem> = {
  args: {
    title: "フォルダ",

    description: "beyondページが一覧としてみれます",
    icon: <FolderIconOutline />,
    selectedIcon: <FolderIconSolid />,
    href: "",
  },
};

export const WithRef = () => {
  const anchorRef = useRef(null);
  const buttonRef = useRef(null);

  return (
    <div className="flex gap-x-2">
      <div>
        <h2>Anchor</h2>
        <ListItem
          href="#"
          ref={anchorRef}
          title="Ref有り"
        />
      </div>
      <div>
        <h2>Button</h2>
        <ListItem
          onClick={() => {}}
          ref={buttonRef}
          title="Ref有り"
        ></ListItem>
      </div>
      <button onClick={() => console.log({ anchorRef, buttonRef })}>Log Refs</button>
    </div>
  );
};
