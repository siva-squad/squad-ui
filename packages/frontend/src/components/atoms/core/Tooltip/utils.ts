const getAlignment = (
  alignment: string,
  alignRight: number,
  alignLeft: number,
  alignCenter: number,
): {} => {
  switch (alignment) {
    case "left":
      return { left: alignLeft };
    case "right":
      return { left: alignRight };
    default:
      return { left: alignCenter };
  }
};

const getPositionToAnchor = (
  position: "top" | "bottom" | "left" | "right",
  topOfAnchor: number,
  bottomOfAnchor: number,
  leftOfAnchor: number,
  rightOfAnchor: number,
): {} => {
  switch (position) {
    case "top":
      return { top: topOfAnchor };
    case "bottom":
      return { top: bottomOfAnchor };
    case "left":
      return { left: leftOfAnchor };
    case "right":
      return { left: rightOfAnchor };
  }
};

const getShapePosition = (alignment: string, shapePosition: number): {} => {
  switch (alignment) {
    case "left":
      return {
        left: shapePosition,
      };
    case "right":
      return {
        right: shapePosition,
      };
    default:
      return {};
  }
};

const getShapeClasses = (positionToAnchor: "top" | "bottom" | "left" | "right") => {
  switch (positionToAnchor) {
    case "top":
      return "bottom-[-4.5px]";
    case "bottom":
      return "top-[-4.5px] rotate-180";
    case "left":
      return "right-[-7px] -rotate-90";
    case "right":
      return "left-[-7px] rotate-90";
  }
};

export { getAlignment, getPositionToAnchor, getShapePosition, getShapeClasses };
