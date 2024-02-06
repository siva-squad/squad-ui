export type Option = {
  name: string;
  id: string;
  isSelected: boolean;
};

export type ListboxProps = {
  options: Option[];
  listName: string;
};
