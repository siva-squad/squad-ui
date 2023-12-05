import { composeStories } from "@storybook/react";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";

import * as ProgressBarStories from "./ProgressBar.stories";

const { Default: ProgressBar } = composeStories(ProgressBarStories);

describe("ProgressBar", () => {
  afterEach(() => {
    cleanup();
  });

  const renderProgressBar = (value: number) => {
    render(<ProgressBar value={value} />);
    return screen.getByTestId("progress-bar");
  };

  test("renders", () => {
    const progressBar = renderProgressBar(0);
    expect(progressBar).toBeInTheDocument();
  });
  test("width is 0% when progress is 0%", () => {
    const progressBar = renderProgressBar(0);
    expect(progressBar).toHaveStyle("width: 0%");
  });
  test("width is 50% when progress is 50%", () => {
    const progressBar = renderProgressBar(50);
    expect(progressBar).toHaveStyle("width: 50%");
  });
  test("width is 100% when progress is 100%", () => {
    const progressBar = renderProgressBar(100);
    expect(progressBar).toHaveStyle("width: 100%");
  });
});
