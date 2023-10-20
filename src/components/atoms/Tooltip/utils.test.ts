import { describe, expect, test } from "vitest";
import { checkIsOffScreen } from "./utils";

describe("Check is off screen", () => {
  test("default values are returned if element is on screen", () => {
    const alignment = "center";
    const positionToAnchor = "top";
    const { checkedAlignment, checkedPositionToAnchor } = checkIsOffScreen(
      500,
      500,
      500,
      500,
      500,
      50,
      70,
      positionToAnchor,
      alignment,
    );

    expect(checkedAlignment).toEqual(alignment);
    expect(positionToAnchor).toEqual(checkedPositionToAnchor);
  });
});
