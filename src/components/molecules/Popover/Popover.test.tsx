import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import * as PopoverStories from "./Popover.stories";

const { Default: Popover } = composeStories(PopoverStories);

describe("Popover", () => {
  test("renders children", async () => {
    render(<Popover />);
    const popoverButton = screen.getByText("Button");
    expect(popoverButton).toBeInTheDocument();
  });
  test("show content when isOpen is true", async () => {
    const { getByRole } = render(<Popover isOpen={true} />);
    const content = getByRole("dialog");

    expect(content).not.toHaveClass("hidden");
  });
  test("not show content when isOpen is false", async () => {
    const { getByRole } = render(<Popover isOpen={false} />);
    const content = getByRole("dialog");

    expect(content).toHaveClass("hidden");
  });
});
