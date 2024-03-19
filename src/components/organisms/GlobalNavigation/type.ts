import { ListItemProps } from "@atoms/ListItem/type";
import { MenuKindKey } from "@components/molecules";
import { RichMenuProps } from "../RichMenu/type";
import { MergeType } from "@/src/utils/type-utils";

export type GlobalNavigationProps = {
  groups: RichMenuProps["groups"];
  items: MergeType<ListItemProps, RichMenuProps>[];
  selectedId: string;
  hasOnlyLogo?: boolean;
  onChangeSelectedId?: (id: string) => void;
  onClickAccountMenu?: (key: MenuKindKey) => void;
};
