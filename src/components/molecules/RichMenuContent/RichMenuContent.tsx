// TODO: MenuListのデータから型抽出

type RichMenuProps = {
  richMenuKey: "cvtag" | "folder" | "inspection";
};

export const RichMenuContent = ({ richMenuKey }: RichMenuProps) => {
  if (richMenuKey === "folder") {
    return <div>GET FAVORITES HERE</div>;
  }

  return <div>{richMenuKey}</div>;
};
