export type PopoverProps = {
  id?: string;
  children: React.ReactNode;
  content: React.ReactNode;
  position:
    | "bottom"
    | "bottomLeft"
    | "bottomRight"
    | "left"
    | "leftBottom"
    | "leftTop"
    | "right"
    | "rightBottom"
    | "rightTop"
    | "top"
    | "topLeft"
    | "topRight";
};
