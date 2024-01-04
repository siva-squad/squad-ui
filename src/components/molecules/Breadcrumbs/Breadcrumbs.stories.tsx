import { BreadcrumbItem } from "@components/atoms/BreadcrumbItem";
import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumbs } from "./Breadcrumbs";

export default {
  component: Breadcrumbs,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof Breadcrumbs>;

export const Default: StoryObj<typeof Breadcrumbs> = {
  args: {
    children: [
      <BreadcrumbItem key="home">Home</BreadcrumbItem>,
      <BreadcrumbItem key="hoge_1">Hoge1</BreadcrumbItem>,
      <BreadcrumbItem key="hoge_2">Hoge2</BreadcrumbItem>,
      <BreadcrumbItem key="hoge_3">Hoge3</BreadcrumbItem>,
      <BreadcrumbItem key="group">Before last</BreadcrumbItem>,
      <BreadcrumbItem key="group_1">Last</BreadcrumbItem>,
    ],
  },
};
