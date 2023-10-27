import { FolderIcon as FolderIconOutline } from "@heroicons/react/24/outline";
import { FolderIcon as FolderIconSolid } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { LocalMenuItem } from "./LocalMenuItem";
import { LocalMenuItemProps } from "./type";

export default {
  component: LocalMenuItem,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    icon: {
      type: "symbol",
    },
    title: {
      type: "string",
    },
    isDisabled: {
      type: "boolean",
      defaultValue: false,
    },
    isSelected: {
      type: "boolean",
      defaultValue: false,
    },
    href: {
      type: "string",
    },
  },
} satisfies Meta<typeof LocalMenuItem>;

export const Default: StoryObj<typeof LocalMenuItem> = {
  args: {
    icon: (
      <FolderIconOutline
        height={16}
        width={16}
      />
    ),
    selectedIcon: (
      <FolderIconSolid
        height={16}
        width={16}
      />
    ),
    title: "フォルダ",
    isDisabled: false,
    isSelected: false,
    href: "#",
  },
};

const STATES: Pick<LocalMenuItemProps, "isDisabled" | "isSelected" | "id">[] = [
  {
    id: "disabled",
    isDisabled: true,
  },
  {
    id: "default",
  },
  {
    id: "hover",
  },
  {
    id: "press",
  },
  {
    id: "selected",
    isSelected: true,
  },
];

export const All = () => {
  return (
    <div className="flex gap-x-6">
      {STATES.map((state) => (
        <div
          key={state.id}
          className="flex flex-col items-center gap-y-2"
        >
          <span className="text-xs text-gray-dark">{state.id}</span>
          <LocalMenuItem
            id={state.id}
            title="フォルダ"
            href="#"
            icon={
              <FolderIconOutline
                height={16}
                width={16}
              />
            }
            selectedIcon={
              <FolderIconSolid
                height={16}
                width={16}
              />
            }
            {...state}
          />
        </div>
      ))}
    </div>
  );
};

All.parameters = {
  pseudo: {
    hover: "#hover",
    focusVisible: "#focus",
    active: "#press",
  },
};
