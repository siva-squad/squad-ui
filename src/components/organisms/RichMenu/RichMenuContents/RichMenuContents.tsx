import { RichMenuDescriptionContent } from "../RichMenuDescriptionContent";
import { RichMenuListContent } from "../RichMenuListContent";
import type { RichMenuContentsProps } from "./type";

export const RichMenuContents = ({ richMenuType }: RichMenuContentsProps) => {
  if (richMenuType === "description")
    return (
      <RichMenuDescriptionContent
        headingText={""}
        description={""}
        imgSrc={""}
      />
    );

  if (richMenuType === "list") return <RichMenuListContent listGroup={[]} />;

  return <></>;
};
