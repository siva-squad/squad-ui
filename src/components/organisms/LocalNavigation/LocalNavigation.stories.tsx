import { FolderIcon as FolderIconOutline } from "@heroicons/react/24/outline";
import { FolderIcon as FolderIconSolid } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";
import { LocalMenuItemProps } from "../../molecules/LocalMenuItem/type";
import { LocalNavigation } from "./LocalNavigation";

const items: LocalMenuItemProps[] = [
  {
    id: "folder1",
    title: "フォルダ1",
    href: "#",
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
  },
  {
    id: "folder2",
    title: "フォルダ2",
    href: "#",
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
  },
  {
    id: "folder3",
    title: "フォルダ3",
    href: "#",
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
  },
  {
    id: "folder4",
    title: "フォルダ4",
    href: "#",
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
  },
];

export default {
  component: LocalNavigation,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    selectedId: {
      options: items.map((item) => item.id),
      control: {
        type: "select",
      },
      description: "選択中のアイテムのID",
    },
  },
} satisfies Meta<typeof LocalNavigation>;

export const Default: StoryObj<typeof LocalNavigation> = {
  args: {
    selectedId: "folder1",
    items,
  },
};
