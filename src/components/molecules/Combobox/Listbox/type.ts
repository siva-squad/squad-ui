type option = {
  name: string;
  id: string;
  isSelected: boolean;
};

export type ListboxProps = {
  options: option[];
  listName: string;
};
