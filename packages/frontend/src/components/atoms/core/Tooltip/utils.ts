import { Direction, Position } from "./type";

type getPositionsArgs = {
  middleHeight: number;
  right: number;
  tooltipAnchorGap: number;
  left: number;
  bottomAlign: number;
  topAlign: number;
  rightAlign: number;
  middleWidth: number;
  shapePosition: number;
  tooltipWidth: number;
  direction: Direction;
  position: Position;
};

type getPositionsReturn = {
  tooltipPosition: {
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
  };
  shapePosition: {
    left?: number;
    right?: number;
  };
};

export const getPositions = ({
  middleHeight,
  right,
  tooltipAnchorGap,
  left,
  bottomAlign,
  topAlign,
  rightAlign,
  middleWidth,
  shapePosition,
  tooltipWidth,
  direction,
  position,
}: getPositionsArgs): getPositionsReturn => {
  if (direction === "right") {
    return {
      tooltipPosition: {
        top: middleHeight,
        left: right + tooltipAnchorGap,
      },
      shapePosition: {},
    };
  } else if (direction === "left") {
    return {
      tooltipPosition: {
        top: middleHeight,
        left: left - tooltipWidth - tooltipAnchorGap,
      },
      shapePosition: {},
    };
  } else if (position === "left" && direction === "bottom") {
    return {
      tooltipPosition: {
        top: bottomAlign,
        left: left,
      },
      shapePosition: {
        left: shapePosition,
      },
    };
  } else if (position === "right" && direction === "bottom") {
    return {
      tooltipPosition: {
        top: bottomAlign,
        left: rightAlign,
      },
      shapePosition: {
        right: shapePosition,
      },
    };
  } else if (position === "left" && direction === "top") {
    return {
      tooltipPosition: {
        top: topAlign,
        left: left,
      },
      shapePosition: {
        left: shapePosition,
      },
    };
  } else if (position === "right" && direction === "top") {
    return {
      tooltipPosition: {
        top: topAlign,
        left: rightAlign,
      },
      shapePosition: {
        right: shapePosition,
      },
    };
  } else if (position === "center" && direction === "top") {
    return {
      tooltipPosition: {
        top: topAlign,
        left: middleWidth,
      },
      shapePosition: {},
    };
  } else if (position === "center" && direction === "bottom") {
    return {
      tooltipPosition: {
        top: bottomAlign,
        left: middleWidth,
      },
      shapePosition: {},
    };
  } else {
    return {
      tooltipPosition: {},
      shapePosition: {},
    };
  }
};
