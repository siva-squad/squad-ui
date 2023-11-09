import { MenuKindKey } from "@components/molecules/MenuList/type";
import { RichMenuDescription } from "@components/molecules/RichMenuDescription";
import { RichMenuDescriptionProps } from "@components/molecules/RichMenuDescription/type";
import { RichMenuList } from "@components/molecules/RichMenuList";
import { RichMenuListProps } from "@components/molecules/RichMenuList/type";

type RichMenuContentsProps = {
  menuId: MenuKindKey;
  descriptionContent?: RichMenuDescriptionProps;
  groups: RichMenuListProps["groups"];
};
export const RichMenuContents = ({ menuId, descriptionContent, groups }: RichMenuContentsProps) => {
  if (menuId === "default") return <></>;

  if (menuId === "folder" && groups?.length)
    return (
      <RichMenuList
        groups={groups}
        onClickButton={() => {}}
      />
    );

  if (menuId !== "folder" && !!descriptionContent)
    return <RichMenuDescription {...descriptionContent} />;
};
