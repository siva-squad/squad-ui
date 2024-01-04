import type { Meta, StoryObj } from "@storybook/react";

import clsx from "clsx";
import { BreadcrumbItem } from "./BreadcrumbItem";

export default {
  component: BreadcrumbItem,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof BreadcrumbItem>;

export const Default: StoryObj<typeof BreadcrumbItem> = {
  args: {
    children: <a href="/">サンプルテキスト</a>,
    clickable: true,
    disabledLastStyle: true,
  },
};

export const All = () => (
  <div className={clsx("flex flex-col gap-5", "[&_h3]:mb-3")}>
    <section>
      <h3 className="font-bold">Default</h3>
      <BreadcrumbItem disabledLastStyle>
        <a href="/">サンプルテキスト</a>
      </BreadcrumbItem>
    </section>
    <section>
      <h3 className="font-bold">Hover</h3>
      <BreadcrumbItem
        id="hover"
        disabledLastStyle
      >
        <a href="/">サンプルテキスト</a>
      </BreadcrumbItem>
    </section>
    <section>
      <h3 className="font-bold">Focus</h3>
      <BreadcrumbItem
        id="focus"
        disabledLastStyle
      >
        <a href="/">サンプルテキスト</a>
      </BreadcrumbItem>
    </section>
    <section>
      <h3 className="font-bold">Pressed(Active)</h3>
      <BreadcrumbItem
        id="active"
        disabledLastStyle
      >
        <a href="/">サンプルテキスト</a>
      </BreadcrumbItem>
    </section>
  </div>
);

All.parameters = {
  pseudo: {
    hover: "#hover",
    focus: "#focus",
    active: "#active",
  },
};
