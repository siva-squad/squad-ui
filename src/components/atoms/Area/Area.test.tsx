import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import * as AreaStories from "./Area.stories";

const { Default: Area } = composeStories(AreaStories);

describe("Area", () => {
  test("renders", async () => {
    render(
      <Area>
        <div>With a little bit of text</div>
      </Area>,
    );
    expect(screen.getByText("With a little bit of text")).toBeInTheDocument();
  });
});
