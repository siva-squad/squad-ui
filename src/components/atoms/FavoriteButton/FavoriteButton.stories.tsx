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
    ariaLabel: "フォルダ１をお気に入りに追加",
  },
};

export const UseCaseExample = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const ariaLabel = isFavorite
    ? "フォルダ名前をお気に入りから削除"
    : "フォルダ名前をお気に入りに追加";

  return (
    <section className="inline-flex h-7 w-60 items-center justify-start gap-2 rounded p-2">
      <span className="shrink grow basis-0 text-xs font-medium leading-3 text-gray">
        フォルダ名前
      </span>
      <FavoriteButton
        isFavorite={isFavorite}
        size="medium"
        onClick={() => setIsFavorite(!isFavorite)}
        ariaLabel={ariaLabel}
      />
    </section>
  );
};

export const AllOptions = () => {
  return (
    <section className="grid w-60 grid-cols-3 grid-rows-2 gap-2 p-2">
      <FavoriteButton
        isFavorite={true}
        size="small"
        ariaLabel="をお気に入りから削除"
      />
      <FavoriteButton
        isFavorite={true}
        size="medium"
        ariaLabel="をお気に入りから削除"
      />
      <FavoriteButton
        isFavorite={true}
        size="large"
        ariaLabel="をお気に入りから削除"
      />
      <FavoriteButton
        isFavorite={false}
        size="small"
        ariaLabel="をお気に入りに追加"
      />
      <FavoriteButton
        isFavorite={false}
        size="medium"
        ariaLabel="をお気に入りに追加"
      />
      <FavoriteButton
        isFavorite={false}
        size="large"
        ariaLabel="をお気に入りに追加"
      />
      <FavoriteButton
        disabled={true}
        isFavorite={true}
        size="small"
        ariaLabel="をお気に入りから削除"
      />
      <FavoriteButton
        disabled={true}
        isFavorite={true}
        size="medium"
        ariaLabel="をお気に入りから削除"
      />
      <FavoriteButton
        disabled={true}
        isFavorite={true}
        size="large"
        ariaLabel="をお気に入りから削除"
      />
      <FavoriteButton
        disabled={true}
        isFavorite={false}
        size="small"
        ariaLabel="をお気に入りに追加"
      />
      <FavoriteButton
        disabled={true}
        isFavorite={false}
        size="medium"
        ariaLabel="をお気に入りに追加"
      />
      <FavoriteButton
        disabled={true}
        isFavorite={false}
        size="large"
        ariaLabel="をお気に入りに追加"
      />
    </section>
  );
};
