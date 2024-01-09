import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import * as ComboboxStories from "./Combobox.stories";

const { Default: Combobox } = composeStories(ComboboxStories);

describe("Combobox", () => {

  test("renders", async () => {
    render(<Combobox />);
  });

});