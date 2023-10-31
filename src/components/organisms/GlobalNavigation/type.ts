export type GlobalNavigationProps = {
  items: { href?: string; title?: string; id: string }[]; // ListItemProps[] + modalKeys
  selectedId: string;
  onChangeSelectedId?: (id: string) => void;
};

export type RichMenuStateType = { id: string; isOpen: boolean };

export type MenuListType = "beyond" | "connection" | "account";
