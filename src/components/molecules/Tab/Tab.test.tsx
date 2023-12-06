import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test } from "vitest";

import * as TabStories from "./Tab.stories";

const { Default: Tab } = composeStories(TabStories);

describe("Tab", () => {
  test("renders", () => {
    render(<Tab />);
  });

  test("Switches pageId on click", async () => {
    render(<Tab />);

    const page1Button = screen.getByRole("button", { name: "page1" });
    const page2Button = screen.getByRole("button", { name: "page2" });

    expect(page1Button).toBeInTheDocument();
    expect(page2Button).toBeInTheDocument();

    const defaultContentBefore = screen.queryByText("Content 1");
    const secondContentBefore = screen.queryByText("Content 2");
    const thirdContentBefore = screen.queryByText("Content 3");

    expect(defaultContentBefore).toBeInTheDocument();
    expect(secondContentBefore).not.toBeInTheDocument();
    expect(thirdContentBefore).not.toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(page2Button);

    const defaultContentAfter = screen.queryByText("Content 1");
    const secondContentAfter = screen.queryByText("Content 2");
    const thirdContentAfter = screen.queryByText("Content 3");

    expect(defaultContentAfter).not.toBeInTheDocument();
    expect(thirdContentAfter).not.toBeInTheDocument();
    expect(secondContentAfter).toBeInTheDocument();
  });
});
