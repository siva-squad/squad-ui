import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import * as BreadcrumbsStories from "./Breadcrumbs.stories";

const { Default: Breadcrumbs } = composeStories(BreadcrumbsStories);

describe("Breadcrumbs", () => {

  test("renders", async () => {
    render(<Breadcrumbs />);
  });

});