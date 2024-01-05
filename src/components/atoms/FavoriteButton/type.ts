import { ComponentPropsWithoutRef } from "react";

export type FavoriteButtonProps = Pick<
  ComponentPropsWithoutRef<"button">,
  "onClick" | "disabled"
> & {
  isFavorite: boolean;
  size: "small" | "medium" | "large";
  ariaLabel: string;
};
