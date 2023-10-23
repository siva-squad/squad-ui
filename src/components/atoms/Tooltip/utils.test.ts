import { describe, expect, test } from "vitest";
import { Alignment, PositionToAnchor } from "./type";
import { checkIsOffScreen, getAlignment } from "./utils";

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
  const alignment = [
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
      const alignmentStyles = getAlignment(alignment, alignRight, alignLeft, alignCenter);

      expect(alignmentStyles).toStrictEqual(expected);
    },
  );
});
