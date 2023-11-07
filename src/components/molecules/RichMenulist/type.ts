import { ReactElement } from "react";
import { ListItemProps } from "@components/atoms/ListItem/type";

export type RichMenuListProps = {
  title: string;
  titleIcon?: ReactElement;
  items: ListItemProps[];
};
