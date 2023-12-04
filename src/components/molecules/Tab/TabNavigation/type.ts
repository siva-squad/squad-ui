type TabProps = {
  pageId: number;
  label: string;
};

export type TabNavigationProps = {
  tabs: TabProps[];
  backgroundColor?: "transparent" | "white";
  activeBorderColor?: "black";
  passiveBorderColor?: "gray";
  activeTextColor?: "black";
  passiveTextColor?: "gray";
};
