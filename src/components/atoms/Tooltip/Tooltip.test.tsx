import { composeStories } from "@storybook/react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, afterEach } from "vitest";

import * as TooltipStories from "./Tooltip.stories";

const { Default: Tooltip, WithButton } = composeStories(TooltipStories);

describe("Tooltip", () => {
  afterEach(() => {
    cleanup();
  });

  test("open and closes on hover", async () => {
    const user = userEvent.setup();
    render(<Tooltip />);

    const anchor = screen.getByTestId("tooltip-anchor");
    expect(anchor).toHaveAccessibleName("");
    await user.hover(anchor);
    const tooltip = screen.getByRole("tooltip");
    expect(anchor).toHaveAccessibleName("メッセージテキスト");
    expect(tooltip).toHaveAttribute("aria-hidden", "false");
    expect(tooltip).toBeInTheDocument();
    await user.unhover(anchor);
    expect(tooltip).not.toBeInTheDocument();
  });

  test("open and closes on tab", async () => {
    const user = userEvent.setup();
    render(<Tooltip />);

    const anchor = screen.getByTestId("tooltip-anchor");
    expect(anchor).toHaveAccessibleName("");
    await user.tab();
    const tooltip = screen.getByRole("tooltip");
    expect(anchor).toHaveAccessibleName("メッセージテキスト");
    expect(tooltip).toHaveAttribute("aria-hidden", "false");
    expect(tooltip).toBeInTheDocument();
    await user.tab();
    expect(tooltip).not.toBeInTheDocument();
  });

  test("native focusable elements should receive focus on tab", async () => {
    const user = userEvent.setup();
    render(<WithButton />);

    const button = screen.getByRole("button");
    const tooltipAnchor = screen.getByTestId("tooltip-anchor");
    await user.tab();
    expect(button).toHaveFocus();
    expect(tooltipAnchor).not.toHaveFocus();
  });
});
