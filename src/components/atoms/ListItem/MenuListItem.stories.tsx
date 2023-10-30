import { useRef } from "react";
import { FolderIcon as FolderIconOutline } from "@heroicons/react/24/outline";
import { FolderIcon as FolderIconSolid } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { MenuListItem } from "./MenuListItem";

export default {
  component: MenuListItem,
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
    type: {
      type: "string",
      options: ["header", "dropdown"],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof MenuListItem>;

export const Dropdown: StoryObj<typeof MenuListItem> = {
  args: {
    title: "ダッシュボード",
    type: "dropdown",
  },
};

export const Header: StoryObj<typeof MenuListItem> = {
  args: {
    title: "フォルダ",
    type: "header",
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
        <MenuListItem
          type="header"
          href="#"
          ref={anchorRef}
          title="Ref有り"
        />
      </div>
      <div>
        <h2>Button</h2>
        <MenuListItem
          type="dropdown"
          onClick={() => {}}
          ref={buttonRef}
          title="Ref有り"
        ></MenuListItem>
      </div>
      <button onClick={() => console.log({ anchorRef, buttonRef })}>Log Refs</button>
    </div>
  );
};
