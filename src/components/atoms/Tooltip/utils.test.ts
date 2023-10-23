import { describe, expect, test } from "vitest";
import { Alignment, PositionToAnchor } from "./type";
import {
  checkIsOffScreen,
  getAlignment,
  getPositionToAnchor,
  getShapeClasses,
  getShapePosition,
} from "./utils";

describe(`${checkIsOffScreen.name}`, () => {
  const positionAndAlignment: {
    bottomSpace: number;
    rightSpace: number;
    centerSpace: number;
    top: number;
    left: number;
    tooltipHeight: number;
    tooltipWidth: number;
    positionToAnchor: PositionToAnchor;
    alignment: Alignment;
    expectedPosition: PositionToAnchor;
    expectedAlignment: Alignment;
  }[] = [
    {
      bottomSpace: 500,
      rightSpace: 500,
      centerSpace: 30,
      top: 500,
      left: 500,
      tooltipHeight: 50,
      tooltipWidth: 70,
      positionToAnchor: "top",
      alignment: "center",
      expectedPosition: "top",
      expectedAlignment: "center",
    },
    {
      bottomSpace: 500,
      rightSpace: 500,
      centerSpace: 30,
      top: 25,
      left: 500,
      tooltipHeight: 50,
      tooltipWidth: 70,
      positionToAnchor: "top",
      alignment: "center",
      expectedPosition: "bottom",
      expectedAlignment: "center",
    },
    {
      bottomSpace: 25,
      rightSpace: 500,
      centerSpace: 500,
      top: 500,
      left: 500,
      tooltipHeight: 50,
      tooltipWidth: 70,
      positionToAnchor: "bottom",
      alignment: "center",
      expectedPosition: "top",
      expectedAlignment: "center",
    },
    {
      bottomSpace: 500,
      rightSpace: 50,
      centerSpace: 30,
      top: 500,
      left: 500,
      tooltipHeight: 50,
      tooltipWidth: 70,
      positionToAnchor: "right",
      alignment: "center",
      expectedPosition: "left",
      expectedAlignment: "center",
    },
    {
      bottomSpace: 500,
      rightSpace: 500,
      centerSpace: 30,
      top: 500,
      left: 50,
      tooltipHeight: 50,
      tooltipWidth: 70,
      positionToAnchor: "left",
      alignment: "center",
      expectedPosition: "right",
      expectedAlignment: "center",
    },
    {
      bottomSpace: 500,
      rightSpace: 500,
      centerSpace: 30,
      top: 500,
      left: 25,
      tooltipHeight: 50,
      tooltipWidth: 70,
      positionToAnchor: "left",
      alignment: "center",
      expectedPosition: "right",
      expectedAlignment: "left",
    },
    {
      bottomSpace: 500,
      rightSpace: 25,
      centerSpace: 30,
      top: 500,
      left: 500,
      tooltipHeight: 50,
      tooltipWidth: 70,
      positionToAnchor: "right",
      alignment: "center",
      expectedPosition: "left",
      expectedAlignment: "right",
    },
  ];
  test.each(positionAndAlignment)(
    "when there is enough space in position $positionToAnchor and in alignment $alignment, returns correct position and alignment",
    ({
      bottomSpace,
      rightSpace,
      centerSpace,
      top,
      left,
      tooltipHeight,
      tooltipWidth,
      positionToAnchor,
      alignment,
      expectedPosition,
      expectedAlignment,
    }) => {
      const { checkedAlignment, checkedPositionToAnchor } = checkIsOffScreen({
        bottomSpace,
        rightSpace,
        centerSpace,
        top,
        left,
        tooltipHeight,
        tooltipWidth,
        positionToAnchor,
        alignment,
      });

      expect(checkedAlignment).toEqual(expectedAlignment);
      expect(checkedPositionToAnchor).toEqual(expectedPosition);
    },
  );
});

describe(`${getAlignment.name}`, () => {
  const alignment: {
    alignment: Alignment;
    alignRight: number;
    alignLeft: number;
    alignCenter: number;
    expected: { left: number };
  }[] = [
    {
      alignment: "left",
      alignRight: 70,
      alignLeft: 50,
      alignCenter: 40,
      expected: { left: 50 },
    },
    {
      alignment: "right",
      alignRight: 70,
      alignLeft: 50,
      alignCenter: 40,
      expected: { left: 70 },
    },
    {
      alignment: "center",
      alignRight: 70,
      alignLeft: 50,
      alignCenter: 40,
      expected: { left: 40 },
    },
  ];

  test.each(alignment)(
    "returns correct style according to alignment $alignment",
    ({ alignCenter, alignLeft, alignRight, alignment, expected }) => {
      const alignmentStyles = getAlignment({ alignment, alignRight, alignLeft, alignCenter });

      expect(alignmentStyles).toStrictEqual(expected);
    },
  );
});

describe(`${getPositionToAnchor.name}`, () => {
  const positionToAnchor: {
    position: PositionToAnchor;
    topOfAnchor: number;
    bottomOfAnchor: number;
    leftOfAnchor: number;
    rightOfAnchor: number;
    expected: { top?: number; left?: number };
  }[] = [
    {
      position: "top",
      topOfAnchor: 70,
      bottomOfAnchor: 80,
      leftOfAnchor: 90,
      rightOfAnchor: 60,
      expected: { top: 70 },
    },
    {
      position: "bottom",
      topOfAnchor: 70,
      bottomOfAnchor: 80,
      leftOfAnchor: 90,
      rightOfAnchor: 60,
      expected: { top: 80 },
    },
    {
      position: "right",
      topOfAnchor: 70,
      bottomOfAnchor: 80,
      leftOfAnchor: 90,
      rightOfAnchor: 60,
      expected: { left: 60 },
    },
    {
      position: "left",
      topOfAnchor: 70,
      bottomOfAnchor: 80,
      leftOfAnchor: 90,
      rightOfAnchor: 60,
      expected: { left: 90 },
    },
  ];
  test.each(positionToAnchor)(
    "returns correct style according to position $positionToAnchor",
    ({ position, topOfAnchor, bottomOfAnchor, leftOfAnchor, rightOfAnchor, expected }) => {
      const positionToAnchorStyles = getPositionToAnchor({
        position,
        topOfAnchor,
        bottomOfAnchor,
        leftOfAnchor,
        rightOfAnchor,
      });

      expect(positionToAnchorStyles).toStrictEqual(expected);
    },
  );
});

describe(`${getShapePosition.name}`, () => {
  const shapePosition: {
    alignment: Alignment;
    shapePosition: number;
    expected: { left?: number; right?: number };
  }[] = [
    {
      alignment: "left",
      shapePosition: 50,
      expected: { left: 50 },
    },
    {
      alignment: "right",
      shapePosition: 50,
      expected: { right: 50 },
    },
    {
      alignment: "center",
      shapePosition: 50,
      expected: {},
    },
  ];
  test.each(shapePosition)(
    "returns correct shape position styles for alignment $alignment",
    ({ alignment, shapePosition, expected }) => {
      const shapePositionStyles = getShapePosition(alignment, shapePosition);

      expect(shapePositionStyles).toStrictEqual(expected);
    },
  );
});

describe(`${getShapeClasses.name}`, () => {
  const shapeClasses: { positionToAnchor: PositionToAnchor; expected: string }[] = [
    {
      positionToAnchor: "top",
      expected: "bottom-[-4.5px]",
    },
    {
      positionToAnchor: "bottom",
      expected: "top-[-4.5px] rotate-180",
    },
    {
      positionToAnchor: "left",
      expected: "right-[-7px] -rotate-90",
    },
    {
      positionToAnchor: "right",
      expected: "left-[-7px] rotate-90",
    },
  ];
  test.each(shapeClasses)(
    "returns correct shape class names for position $positionToAnchor",
    ({ positionToAnchor, expected }) => {
      const shapeClassNames = getShapeClasses(positionToAnchor);

      expect(shapeClassNames).toBe(expected);
    },
  );
});
