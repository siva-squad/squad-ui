import { RichMenuDescription } from "@components/molecules/RichMenuDescription";
import { RichMenuList } from "@components/molecules/RichMenuList";
import { RichMenuContentsProps } from "./type";

export const RichMenuContents = ({ menuId, descriptionContent, groups }: RichMenuContentsProps) => {
  if (menuId === "default") return <></>;

  if (menuId === "folder" && groups?.length)
    return (
      <RichMenuList
        groups={groups}
        onViewAllFolders={() => {}}
      />
    );

  if (menuId !== "folder" && !!descriptionContent)
    return <RichMenuDescription {...descriptionContent} />;
};
