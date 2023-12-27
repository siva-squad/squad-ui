import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import * as PopoverStories from "./Popover.stories";

const { Default: Popover } = composeStories(PopoverStories);

describe("Popover", () => {

  test("renders", async () => {
    render(<Popover />);
  });

});