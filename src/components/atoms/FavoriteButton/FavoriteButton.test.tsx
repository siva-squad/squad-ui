import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import * as FavoriteButtonStories from "./FavoriteButton.stories";

const { Default: FavoriteButton } = composeStories(FavoriteButtonStories);

describe("FavoriteButton", () => {

  test("renders", async () => {
    render(<FavoriteButton />);
  });

});