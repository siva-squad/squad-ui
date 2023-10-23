import { Alignment, CheckIsOffScreenProps, PositionToAnchor } from "./type";

export const checkIsOffScreen = ({
  bottomSpace,
  rightSpace,
  centerSpace,
  top,
  left,
  tooltipHeight,
  tooltipWidth,
  positionToAnchor,
  alignment,
}: CheckIsOffScreenProps): {
  checkedPositionToAnchor: PositionToAnchor;
  checkedAlignment: Alignment;
} => {
  const positionToAnchorInformation = {
    top: {
      isOffScreen: top - tooltipHeight < 0,
      flipValue: "bottom",
    },
    bottom: {
      isOffScreen: bottomSpace - tooltipHeight < 0,
      flipValue: "top",
    },
    left: {
      isOffScreen: left - tooltipWidth < 0,
      flipValue: "right",
    },
    right: {
      isOffScreen: rightSpace - tooltipWidth < 0,
      flipValue: "left",
    },
  };

  const alignemntInformation = {
    left: {
      isOffScreen: rightSpace - tooltipWidth < 0,
      flipValue: "right",
    },
    right: {
      isOffScreen: left - tooltipWidth < 0,
      flipValue: "left",
    },
    center: {
      isOffScreen: rightSpace - centerSpace < 0 || left - centerSpace < 0,
    },
  };

  const checkedPositionToAnchor = positionToAnchorInformation[positionToAnchor].isOffScreen
    ? (positionToAnchorInformation[positionToAnchor].flipValue as PositionToAnchor)
    : positionToAnchor;

  let checkedAlignment;

  if (alignment === "center" && alignemntInformation[alignment].isOffScreen) {
    const isLeftAlignmentOffScreen = alignemntInformation.left.isOffScreen;
    const isRightAlignmentOffScreen = alignemntInformation.right.isOffScreen;

    checkedAlignment = isLeftAlignmentOffScreen
      ? ("right" as Alignment)
      : isRightAlignmentOffScreen
      ? ("left" as Alignment)
      : ("center" as Alignment);

    return { checkedPositionToAnchor, checkedAlignment };
  }

  checkedAlignment =
    alignment !== "center" && alignemntInformation[alignment].isOffScreen
      ? (alignemntInformation[alignment].flipValue as Alignment)
      : alignment;

  return { checkedPositionToAnchor, checkedAlignment };
};

export const getAlignment = ({
  alignment,
  alignRight,
  alignLeft,
  alignCenter,
}: {
  alignment: Alignment;
  alignRight: number;
  alignLeft: number;
  alignCenter: number;
}): {} => {
  switch (alignment) {
    case "left":
      return { left: alignLeft };
    case "right":
      return { left: alignRight };
    default:
      return { left: alignCenter };
  }
};

export const getPositionToAnchor = (
  position: PositionToAnchor,
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

export const getShapePosition = (alignment: Alignment, shapePosition: number): {} => {
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

export const getShapeClasses = (positionToAnchor: PositionToAnchor) => {
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
