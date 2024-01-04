import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { FavoriteButton } from "./FavoriteButton";

export default {
  component: FavoriteButton,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    isFavorite: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof FavoriteButton>;

export const Default: StoryObj<typeof FavoriteButton> = {
  args: {
    isFavorite: false,
    size: "medium",
    itemName: "フォルダ１",
  },
};

export const UseCaseExample = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <section className="inline-flex h-7 w-60 items-center justify-start gap-2 rounded p-2">
      <span className="shrink grow basis-0 text-xs font-medium leading-3 text-gray">
        フォルダ名前
      </span>
      <FavoriteButton
        itemName="フォルダ名前"
        isFavorite={isFavorite}
        size="medium"
        onClick={() => setIsFavorite(!isFavorite)}
      />
    </section>
  );
};

export const AllOptions = () => {
  return (
    <section className="grid w-60 grid-cols-3 grid-rows-2 gap-2 p-2">
      <FavoriteButton
        itemName="フォルダ名前"
        isFavorite={true}
        size="small"
      />
      <FavoriteButton
        itemName="フォルダ名前"
        isFavorite={true}
        size="medium"
      />
      <FavoriteButton
        itemName="フォルダ名前"
        isFavorite={true}
        size="large"
      />
      <FavoriteButton
        itemName="フォルダ名前"
        isFavorite={false}
        size="small"
      />
      <FavoriteButton
        itemName="フォルダ名前"
        isFavorite={false}
        size="medium"
      />
      <FavoriteButton
        itemName="フォルダ名前"
        isFavorite={false}
        size="large"
      />
      <FavoriteButton
        disabled={true}
        itemName="フォルダ名前"
        isFavorite={true}
        size="small"
      />
      <FavoriteButton
        disabled={true}
        itemName="フォルダ名前"
        isFavorite={true}
        size="medium"
      />
      <FavoriteButton
        disabled={true}
        itemName="フォルダ名前"
        isFavorite={true}
        size="large"
      />
      <FavoriteButton
        disabled={true}
        itemName="フォルダ名前"
        isFavorite={false}
        size="small"
      />
      <FavoriteButton
        disabled={true}
        itemName="フォルダ名前"
        isFavorite={false}
        size="medium"
      />
      <FavoriteButton
        disabled={true}
        itemName="フォルダ名前"
        isFavorite={false}
        size="large"
      />
    </section>
  );
};
