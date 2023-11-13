import { ListItemProps } from "@atoms/ListItem/type";
import { RichMenuProps } from "../RichMenu/type";
import { MergeType } from "@/src/utils/type-utils";

export type GlobalNavigationProps = {
  groups: RichMenuProps["groups"];
  items: MergeType<ListItemProps, RichMenuProps>[];
  selectedId: string;
  showAccount?: boolean;
  showMenu?: boolean;
  onChangeSelectedId?: (id: string) => void;
};
