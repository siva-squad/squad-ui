export type GlobalNavigationProps = {
  items: { href?: string; title?: string; id?: string }[]; // ListItemProps[]
  selectedId: string;
  onChangeSelectedId?: (id: string) => void;
};
