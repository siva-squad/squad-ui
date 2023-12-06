---
to: <%= abs_path %>/<%= component_name %>.test.tsx
---
import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import * as <%= component_name %>Stories from "./<%= component_name %>.stories";

const { Default: <%= component_name %> } = composeStories(<%= component_name %>Stories);

describe("<%= component_name %>", () => {

  test("renders", async () => {
    render(<<%= component_name %> />);
  });

});