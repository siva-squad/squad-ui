export type ListElementProps = {
  onClick: () => void;
  isSelected: boolean;
  id: string;
  hasVisualFocus: boolean;
  onMouseOver: () => void;
  name: string;
};
