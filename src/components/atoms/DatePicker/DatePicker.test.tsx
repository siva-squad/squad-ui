import { composeStories } from "@storybook/react";
import { render, cleanup } from "@testing-library/react";
import { describe, expect } from "vitest";

import * as DatePickerStories from "./DatePicker.stories";

const { Default: DatePicker } = composeStories(DatePickerStories);

describe("DatePicker", () => {
  afterEach(() => {
    cleanup();
  });

  test("render", () => {
    render(<DatePicker />);
    expect(DatePicker).toBeInTheDocument();
  });
});
