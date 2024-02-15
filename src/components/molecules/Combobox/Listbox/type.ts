export type Option = {
  name: string;
  id: string;
};

export type ListboxProps = {
  options: Option[];
  listName: string;
  onClick: (option: Option) => void;
  selectedElementId: string;
  visualFocusIndex: number | null;
  onMouseOver: (index: number) => void;
};
