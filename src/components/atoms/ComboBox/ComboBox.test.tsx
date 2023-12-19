import { composeStories } from "@storybook/react";
import { render, } from "@testing-library/react";
import { describe, test } from "vitest";

import * as ComboBoxStories from "./ComboBox.stories";

const { Default: ComboBox } = composeStories(ComboBoxStories);

describe("ComboBox", () => {

  test("renders", async () => {
    render(<ComboBox />);
  });

});