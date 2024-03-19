import { ListItemProps } from "@atoms/ListItem/type";
import { MenuKindKey } from "@components/molecules";
import { GlobalAccountProps } from "../GlobalAccount/type";
import { RichMenuProps } from "../RichMenu/type";
import { MergeType } from "@/src/utils/type-utils";

export type GlobalNavigationProps = {
  groups: RichMenuProps["groups"];
  items: MergeType<ListItemProps, RichMenuProps>[];
  selectedId: string;
  hasOnlyLogo?: boolean;
  onChangeSelectedId?: (id: string) => void;
  onClickAccountMenu?: (key: MenuKindKey) => void;
} & Pick<GlobalAccountProps, "teamName" | "userId" | "userImage" | "userName">;
