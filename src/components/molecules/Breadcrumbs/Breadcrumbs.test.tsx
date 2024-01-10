import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";

import * as BreadcrumbsStories from "./Breadcrumbs.stories";

const { Default: Breadcrumbs } = composeStories(BreadcrumbsStories);

describe("Breadcrumbs", () => {
  test("renders", async () => {
    render(<Breadcrumbs />);
    const anchors = [
      screen.getByRole("link", { name: "ホーム" }),
      screen.getByRole("link", { name: "サンプルテキスト1" }),
      screen.getByRole("link", { name: "サンプルテキスト2" }),
      screen.getByRole("link", { name: "サンプルテキスト3" }),
      screen.getByRole("link", { name: "1つ前のページ" }),
      screen.getByRole("link", { name: "今いるページ" }),
    ];

    anchors.forEach((anchor) => {
      expect(anchor).toBeInTheDocument();
    });
  });
});
