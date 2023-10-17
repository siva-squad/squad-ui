import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import Meta, { Default } from "./Tooltip.stories";

const Tooltip = composeStory(Default, Meta);

describe("Tooltip", () => {
  test("open and closes tooltip on hover", async () => {
    const user = userEvent.setup();

    render(<Tooltip />);

    const anchor = screen.getByText("Text");
    await user.hover(anchor);
    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
    await user.unhover(anchor);
    expect(tooltip).not.toBeInTheDocument();
  });

  test("open and closes tooltip on tab", async () => {
    const user = userEvent.setup();

    render(<Tooltip />);

    await user.tab();
    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
    await user.tab();
    expect(tooltip).not.toBeInTheDocument();
  });
});
