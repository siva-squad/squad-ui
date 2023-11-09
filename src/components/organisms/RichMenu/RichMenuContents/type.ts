import type { MenuKindKey } from "@components/molecules/MenuList";
import type { RichMenuDescriptionProps } from "@components/molecules/RichMenuDescription/type";
import type { RichMenuListProps } from "@components/molecules/RichMenuList/type";

export type RichMenuContentsProps = {
  menuId: MenuKindKey;
  descriptionContent?: RichMenuDescriptionProps;
  groups: RichMenuListProps["groups"];
};
