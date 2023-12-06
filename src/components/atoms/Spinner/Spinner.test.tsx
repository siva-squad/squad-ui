import { composeStories } from "@storybook/react";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";

import * as SpinnerStories from "./Spinner.stories";

const { Default: Spinner } = composeStories(SpinnerStories);

describe("Spinner", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders when loading is true", () => {
    render(<Spinner loading={true} />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });

  test("does not render when loading is false", () => {
    render(<Spinner loading={false} />);
    const spinner = screen.queryByTestId("spinner");
    expect(spinner).not.toBeInTheDocument();
  });
});
