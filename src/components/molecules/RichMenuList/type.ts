import { ReactElement } from "react";
import { ListItemProps } from "@components/atoms/ListItem/type";

export type RichMenuListProps = {
  onClickButton: () => void;
  groups?: {
    id: string;
    title: string;
    titleIcon?: ReactElement;
    items: ListItemProps[];
    bottomButton?: ReactElement;
  }[];
};
