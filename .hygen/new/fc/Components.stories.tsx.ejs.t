---
to: <%= abs_path %>/<%= component_name %>.stories.tsx
---

import type { Meta, StoryObj } from "@storybook/react";

import { <%= component_name %> } from "./<%= component_name %>";

export default {
  component: <%= component_name %>,
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof <%= component_name %>>;

export const Default: StoryObj<typeof <%= component_name %>> = {
<% if (have_props) { -%>
  argTypes: {},
  args: {},
<% } -%>
};


