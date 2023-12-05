import { composeStories } from "@storybook/react";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";

import * as BadgeStories from "./Badge.stories";

const { Default: Badge } = composeStories(BadgeStories);

describe("Badge", () => {
  afterEach(() => {
    cleanup();
  });
  test("renders with children", () => {
    render(<Badge>Test</Badge>);
    const badge = screen.getByText("Test");
    expect(badge).toBeInTheDocument();
  });
});
