import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { describe, test } from "vitest";

import * as AvatarMultipleStories from "./AvatarMultiple.stories";

const { Default: AvatarMultiple } = composeStories(AvatarMultipleStories);

describe("AvatarMultiple", () => {
  test("renders", async () => {
    render(<AvatarMultiple />);
  });
});
