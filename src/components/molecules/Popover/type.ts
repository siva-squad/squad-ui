export type PopoverProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  trigger: "hover" | "click" | "focus";
  placement:
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
