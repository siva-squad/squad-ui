import {
  Alignment,
  CheckIsOffScreenReturn,
  GetPositionToAnchorReturn,
  GetShapePositionReturn,
  PositionToAnchor,
  CheckIsOffScreenProps,
} from "./type";

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
}: CheckIsOffScreenProps): CheckIsOffScreenReturn => {
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

  const alignmentInformation = {
    left: {
      isOffScreen: rightSpace - centerSpace < 0,
      flipValue: "right",
    },
    right: {
      isOffScreen: left - centerSpace < 0,
      flipValue: "left",
    },
    center: {
      isOffScreen: rightSpace - centerSpace < 0 || left - centerSpace < 0,
    },
  };

  const checkedPositionToAnchor = positionToAnchorInformation[positionToAnchor].isOffScreen
    ? (positionToAnchorInformation[positionToAnchor].flipValue as PositionToAnchor)
    : positionToAnchor;

  if (alignment === "center" && alignmentInformation[alignment].isOffScreen) {
    const isLeftAlignmentOffScreen = alignmentInformation.left.isOffScreen;
    const isRightAlignmentOffScreen = alignmentInformation.right.isOffScreen;

    const checkedAlignment = isLeftAlignmentOffScreen
      ? ("right" as Alignment)
      : isRightAlignmentOffScreen
      ? ("left" as Alignment)
      : ("center" as Alignment);

    return { checkedPositionToAnchor, checkedAlignment };
  } else {
    const checkedAlignment =
      alignment !== "center" && alignmentInformation[alignment].isOffScreen
        ? (alignmentInformation[alignment].flipValue as Alignment)
        : alignment;

    return { checkedPositionToAnchor, checkedAlignment };
  }
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
}): { left: number } => {
  switch (alignment) {
    case "left":
      return { left: alignLeft };
    case "right":
      return { left: alignRight };
    default:
      return { left: alignCenter };
  }
};

export const getPositionToAnchor = ({
  position,
  topOfAnchor,
  bottomOfAnchor,
  leftOfAnchor,
  rightOfAnchor,
}: {
  position: PositionToAnchor;
  topOfAnchor: number;
  bottomOfAnchor: number;
  leftOfAnchor: number;
  rightOfAnchor: number;
}): GetPositionToAnchorReturn => {
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

export const getShapePosition = (
  alignment: Alignment,
  shapePosition: number,
): GetShapePositionReturn => {
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

export const getShapeClasses = (positionToAnchor: PositionToAnchor): string => {
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
