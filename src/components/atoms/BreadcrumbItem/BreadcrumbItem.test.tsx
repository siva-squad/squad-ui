import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import * as BreadcrumbItemStories from "./BreadcrumbItem.stories";

const { Default: BreadcrumbItem } = composeStories(BreadcrumbItemStories);

describe("BreadcrumbItem", () => {

  test("renders", async () => {
    render(<BreadcrumbItem />);
  });

});