import { useRef } from "react";
import { FolderIcon as FolderIconOutline } from "@heroicons/react/24/outline";
import { FolderIcon as FolderIconSolid } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { ListItem } from "./ListItem";
import { ListItemProps } from "./type";

export default {
  component: ListItem,
  parameters: {
    controls: { expanded: true },
    layout: "centered",
  },
  argTypes: {
    id: {
      type: "string",
    },
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
    theme: {
      type: "string",
      control: {
        type: "select",
      },
      options: ["normal", "red"],
      defaultValue: "normal",
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

const SIZES: ListItemProps["size"][] = ["small", "medium", "large"];
const STATES: (Pick<ListItemProps, "isDisabled" | "isSelected"> & { id: string })[] = [
  { id: "disable", isDisabled: true },
  { id: "default" },
  { id: "hover" },
  { id: "press" },
  { id: "selected", isSelected: true },
  { id: "focus" },
];

export const All = () => {
  return (
    <>
      <div className="ml-[128px] flex items-center">
        {SIZES.map((size) => (
          <h2
            key={size}
            className="mr-[125px] text-gray-dark"
          >
            {size}
          </h2>
        ))}
      </div>
      <div className="mt-10 flex w-fit flex-col justify-around gap-y-10">
        {STATES.map((state) => (
          <div
            key={state.id}
            className="flex items-center gap-x-10"
          >
            <h2 className="w-20 text-gray-dark">{state.id}</h2>
            <div className="flex gap-x-10">
              {SIZES.map((size) => (
                <div
                  key={state.id}
                  className="w-fit grow-0"
                >
                  <ListItem
                    id={state.id}
                    title="テキスト"
                    icon={<FolderIconOutline />}
                    selectedIcon={<FolderIconSolid />}
                    key={state.id}
                    isDisabled={state.isDisabled}
                    isSelected={state.isSelected}
                    {...(size === "large" && { description: "descriptionTextが入ります" })}
                    size={size as "large"} // to avoid description prop passing error
                    href=""
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

All.parameters = {
  pseudo: {
    hover: "#hover",
    focusVisible: "#focus",
    active: "#press",
  },
};
