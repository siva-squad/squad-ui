import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { describe, test } from "vitest";

import * as TabStories from "./Tab.stories";

const { Default: Tab } = composeStories(TabStories);

describe("Tab", () => {
  test("renders", async () => {
    render(<Tab />);
  });
});
