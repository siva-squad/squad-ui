import { describe, expect, test } from "vitest";
import { checkIsOffScreen } from "./utils";

describe("Check is off screen", () => {
  test("default values are returned if element is on screen", () => {
    const alignment = "center";
    const positionToAnchor = "top";
    const { checkedAlignment, checkedPositionToAnchor } = checkIsOffScreen({
      bottomSpace: 500,
      rightSpace: 500,
      centerSpace: 500,
      top: 500,
      left: 500,
      tooltipHeight: 50,
      tooltipWidth: 70,
      positionToAnchor,
      alignment,
    });

    expect(checkedAlignment).toEqual(alignment);
    expect(positionToAnchor).toEqual(checkedPositionToAnchor);
  });
});
