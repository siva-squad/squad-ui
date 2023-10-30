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

export const Small: StoryObj<typeof ListItem> = {
  args: {
    title: "テキスト",
    icon: <FolderIconOutline />,
    selectedIcon: <FolderIconSolid />,
    href: "",
    size: "small",
  },
};

export const Medium: StoryObj<typeof ListItem> = {
  args: {
    title: "テキスト",
    icon: <FolderIconOutline />,
    selectedIcon: <FolderIconSolid />,
    size: "medium",
  },
};

export const Large: StoryObj<typeof ListItem> = {
  args: {
    title: "テキスト",
    icon: <FolderIconOutline />,
    selectedIcon: <FolderIconSolid />,
    href: "",
    size: "large",
    description: "descriptionTextが入ります",
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
