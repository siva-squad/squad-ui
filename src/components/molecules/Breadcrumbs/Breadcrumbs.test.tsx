import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { describe, test } from "vitest";

import * as BreadcrumbsStories from "./Breadcrumbs.stories";

const { Default: Breadcrumbs } = composeStories(BreadcrumbsStories);

describe("Breadcrumbs", () => {
  test("renders", async () => {
    render(<Breadcrumbs />);
  });
});
