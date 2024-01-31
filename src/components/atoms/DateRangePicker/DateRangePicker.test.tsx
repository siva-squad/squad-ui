import { composeStories } from "@storybook/react";
import { render, cleanup } from "@testing-library/react";
import { describe, expect } from "vitest";

import * as DateRangePickerStories from "./DateRangePicker.stories";

const { Default: DateRangePicker } = composeStories(DateRangePickerStories);

describe("DateRangePicker", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders with children", () => {
    render(<DateRangePicker />);
    expect(DateRangePicker).toBeInTheDocument();
  });
});
