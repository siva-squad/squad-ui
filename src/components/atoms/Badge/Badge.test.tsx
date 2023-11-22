import { cleanup, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { Badge } from "./Badge";
import { BADGE_CLASS_NAME, COLORS, THEMES } from "./const";

// Badge/const.tsのCOLORS、THEMEを全てテストする
// eachとBADGE_CLASS_NAMEを使う
// これで十分テストになっているかどうか？
describe("Badge", () => {
  afterEach(() => {
    cleanup();
  });
  test("renders with children", () => {
    render(<Badge>Test</Badge>);
    const badge = screen.getByText("Test");
    expect(badge).toBeInTheDocument();
  });
  test("renders with base class", () => {
    render(<Badge>Test</Badge>);
    const badge = screen.getByText("Test");
    expect(badge).toHaveClass("rounded-full px-2 py-1 text-[10px]");
  });
  test("renders with default color and default theme", () => {
    render(<Badge>Test</Badge>);
    const badge = screen.getByText("Test");
    expect(badge).toHaveClass(BADGE_CLASS_NAME({ color: "primary", theme: "fill" }));
  });
  test.each(COLORS)("renders with %s color and fill theme", (color) => {
    const fillTheme = THEMES[0];
    render(
      <Badge
        color={color}
        theme={fillTheme}
      >
        Test
      </Badge>,
    );
    const badge = screen.getByText("Test");
    expect(badge).toHaveClass(BADGE_CLASS_NAME({ color, theme: fillTheme }));
  });
  test.each(COLORS)("renders with %s color and border theme", (color) => {
    const borderTheme = THEMES[1];
    render(
      <Badge
        color={color}
        theme={borderTheme}
      >
        Test
      </Badge>,
    );
    const badge = screen.getByText("Test");
    expect(badge).toHaveClass(BADGE_CLASS_NAME({ color, theme: borderTheme }));
  });
  test.each(COLORS)("renders with %s color and outline theme", (color) => {
    const lightFillTheme = THEMES[2];
    render(
      <Badge
        color={color}
        theme={lightFillTheme}
      >
        Test
      </Badge>,
    );
    const badge = screen.getByText("Test");
    expect(badge).toHaveClass(BADGE_CLASS_NAME({ color, theme: lightFillTheme }));
  });
});

// renders with primary color and fill theme
// renders with primary color and border theme
// renders with primary color and light-fill theme
// のようにBadge/const.tsのcompoundVariantsに書いてある組み合わせを全てテストする
// BADGE_CLASS_NAMEを変更した時に意図していない変更が入ったとしてもテストが落ちるようになる
// ただ、これだとテストが増えすぎてしまう
describe("Badge", () => {
  afterEach(() => {
    cleanup();
  });
  test("renders with children", () => {
    render(<Badge>Test</Badge>);
    const badge = screen.getByText("Test");
    expect(badge).toBeInTheDocument();
  });
  test("renders with default color and default theme", () => {
    render(<Badge>Test</Badge>);
    const badge = screen.getByText("Test");
    expect(badge).toHaveClass("bg-primary-600 text-white");
  });
  test("renders with primary color and fill theme", () => {
    render(
      <Badge
        color="primary"
        theme="fill"
      >
        Test
      </Badge>,
    );
    const badge = screen.getByText("Test");
    expect(badge).toHaveClass("bg-primary-600 text-white");
  });
  test("renders with primary color and border theme", () => {
    render(
      <Badge
        color="primary"
        theme="border"
      >
        Test
      </Badge>,
    );
    const badge = screen.getByText("Test");
    expect(badge).toHaveClass("border-primary-600 text-primary-600 border bg-white");
  });
  test("renders with primary color and light-fill theme", () => {
    render(
      <Badge
        color="primary"
        theme="light-fill"
      >
        Test
      </Badge>,
    );
    const badge = screen.getByText("Test");
    expect(badge).toHaveClass("bg-primary-50 text-primary-600");
  });
  test("renders with blue color and fill theme", () => {
    render(<Badge color="blue">Test</Badge>);
    const badge = screen.getByText("Test");
    expect(badge).toHaveClass("bg-blue text-white");
  });
  test("renders with blue color and border theme", () => {
    render(
      <Badge
        color="blue"
        theme="border"
      >
        Test
      </Badge>,
    );
    const badge = screen.getByText("Test");
    expect(badge).toHaveClass("border-blue text-blue border bg-white");
  });
  test("renders with blue color and light-fill theme", () => {
    render(
      <Badge
        color="blue"
        theme="light-fill"
      >
        Test
      </Badge>,
    );
    const badge = screen.getByText("Test");
    expect(badge).toHaveClass("bg-blue-light text-blue");
  });
  // ...
});
