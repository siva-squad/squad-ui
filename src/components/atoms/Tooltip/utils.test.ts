import { describe, expect, test } from "vitest";
import { checkIsOffScreen } from "./utils";

describe("Check is off screen", () => {
  test("default values are returned if tooltip is on screen", () => {
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

  test("top flip value is returned when tooltip is off screen", () => {
    const alignment = "center";
    const positionToAnchor = "top";
    const { checkedPositionToAnchor } = checkIsOffScreen({
      bottomSpace: 500,
      rightSpace: 500,
      centerSpace: 500,
      top: 25,
      left: 500,
      tooltipHeight: 50,
      tooltipWidth: 70,
      positionToAnchor,
      alignment,
    });

    expect(positionToAnchor).not.toEqual(checkedPositionToAnchor);
    expect(checkedPositionToAnchor).toEqual("bottom");
  });

  test("bottom flip value is returned when tooltip is off screen", () => {
    const alignment = "center";
    const positionToAnchor = "bottom";
    const { checkedPositionToAnchor } = checkIsOffScreen({
      bottomSpace: 25,
      rightSpace: 500,
      centerSpace: 500,
      top: 500,
      left: 500,
      tooltipHeight: 50,
      tooltipWidth: 70,
      positionToAnchor,
      alignment,
    });

    expect(positionToAnchor).not.toEqual(checkedPositionToAnchor);
    expect(checkedPositionToAnchor).toEqual("top");
  });

  test("right flip value is returned when tooltip is off screen", () => {
    const alignment = "center";
    const positionToAnchor = "right";
    const { checkedPositionToAnchor } = checkIsOffScreen({
      bottomSpace: 500,
      rightSpace: 25,
      centerSpace: 500,
      top: 500,
      left: 500,
      tooltipHeight: 50,
      tooltipWidth: 70,
      positionToAnchor,
      alignment,
    });

    expect(positionToAnchor).not.toEqual(checkedPositionToAnchor);
    expect(checkedPositionToAnchor).toEqual("left");
  });

  test("left flip value is returned when tooltip is off screen", () => {
    const alignment = "center";
    const positionToAnchor = "left";
    const { checkedPositionToAnchor } = checkIsOffScreen({
      bottomSpace: 500,
      rightSpace: 500,
      centerSpace: 500,
      top: 500,
      left: 25,
      tooltipHeight: 50,
      tooltipWidth: 70,
      positionToAnchor,
      alignment,
    });

    expect(positionToAnchor).not.toEqual(checkedPositionToAnchor);
    expect(checkedPositionToAnchor).toEqual("right");
  });
});
