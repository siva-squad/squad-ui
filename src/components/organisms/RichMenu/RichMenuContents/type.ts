import { RichMenuListContentProps } from "../RichMenuListContent/type";

export type RichMenuContentsProps =
  | {
      richMenuType: "default";
      listGroup?: never;
      headingText?: never;
      description?: never;
      imgSrc: never;
    }
  | {
      richMenuType: "list";
      listGroup: RichMenuListContentProps["listGroup"];
      headingText?: never;
      description?: never;
      imgSrc?: never;
    }
  | {
      richMenuType: "description";
      headingText: string;
      description: string;
      imgSrc: string;
      listGroup?: never;
    };
