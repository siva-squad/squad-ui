import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";

import * as BreadcrumbItemStories from "./BreadcrumbItem.stories";

const { Default: BreadcrumbItem } = composeStories(BreadcrumbItemStories);

describe("BreadcrumbItem", () => {
  test("renders", async () => {
    render(<BreadcrumbItem />);
    const anchor = screen.getByRole("link", { name: "サンプルテキスト" });
    expect(anchor).toBeInTheDocument();
  });
});
