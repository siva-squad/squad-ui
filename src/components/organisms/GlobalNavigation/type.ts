import { ListItemProps } from "@atoms/ListItem/type";
import { RichMenuProps } from "../RichMenu/type";
import { MergeType } from "@/src/utils/type-utils";

export type GlobalNavigationProps = {
  items: MergeType<ListItemProps, RichMenuProps>[]; // ListItemProps[] + modalKeys
  selectedId: string;
  onChangeSelectedId?: (id: string) => void;
};
