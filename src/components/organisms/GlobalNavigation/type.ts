export type GlobalNavigationProps = {
  items: { href?: string; title?: string; id: string; key: MenuListType }[]; // ListItemProps[] + modalKeys
  selectedId: string;
  onChangeSelectedId?: (id: string) => void;
};

export type MenuListType = "beyond" | "connection" | "account" | "";
export type RichMenuStateType = { key: MenuListType; isOpen: boolean };
