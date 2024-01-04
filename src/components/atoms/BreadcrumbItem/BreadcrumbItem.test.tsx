import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { describe, test } from "vitest";

import * as BreadcrumbItemStories from "./BreadcrumbItem.stories";

const { Default: BreadcrumbItem, All: AllBreadcrumbItems } = composeStories(BreadcrumbItemStories);

describe("BreadcrumbItem", () => {
  test("renders", async () => {
    render(<BreadcrumbItem />);
  });
  test("renders all", async () => {
    render(<AllBreadcrumbItems />);
  });
});
