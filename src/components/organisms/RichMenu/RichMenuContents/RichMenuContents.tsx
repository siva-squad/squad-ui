import { RichMenuDescriptionContent } from "../RichMenuDescriptionContent";
import { RichMenuDescriptionContentProps } from "../RichMenuDescriptionContent/type";
import { RichMenuListContent } from "../RichMenuListContent";
import { RichMenuListContentProps } from "../RichMenuListContent/type";
import type { RichMenuContentsProps } from "./type";

export const RichMenuContents = ({ richMenuType, ...props }: RichMenuContentsProps) => {
  if (richMenuType === "description")
    return <RichMenuDescriptionContent {...(props as RichMenuDescriptionContentProps)} />;

  if (richMenuType === "list")
    return <RichMenuListContent {...(props as RichMenuListContentProps)} />;

  return <></>;
};
