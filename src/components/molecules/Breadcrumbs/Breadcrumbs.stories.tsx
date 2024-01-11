import { BreadcrumbItem } from "@components/atoms/BreadcrumbItem";
import type { Meta, StoryObj } from "@storybook/react";

import clsx from "clsx";
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
      <BreadcrumbItem key="home">
        <a href="/">ホーム</a>
      </BreadcrumbItem>,
      <BreadcrumbItem key="sample-1">
        <a href="/">サンプルテキスト1</a>
      </BreadcrumbItem>,
      <BreadcrumbItem key="sample-2">
        <a href="/">サンプルテキスト2</a>
      </BreadcrumbItem>,
      <BreadcrumbItem key="sample-3">
        <a href="/">サンプルテキスト3</a>
      </BreadcrumbItem>,
      <BreadcrumbItem key="before-last">
        <a href="/">1つ前のページ</a>
      </BreadcrumbItem>,
      <BreadcrumbItem key="current">
        <a href="/">今いるページ</a>
      </BreadcrumbItem>,
    ],
    overflowCount: 5,
    sliceEnd: -3,
  },
};

export const All = () => (
  <div className={clsx("flex flex-col gap-5", "[&_h3]:mb-3 [&_h3]:font-bold")}>
    <section>
      <h3>コンテンツが4個未満の表示</h3>
      <Breadcrumbs>
        <BreadcrumbItem key="home">ホーム</BreadcrumbItem>
        <BreadcrumbItem key="before-last">1つ前のページ</BreadcrumbItem>
        <BreadcrumbItem key="current">今いるページ</BreadcrumbItem>
      </Breadcrumbs>
    </section>
    <section>
      <h3>コンテンツが4個以上の表示</h3>
      <Breadcrumbs id="hover">
        <BreadcrumbItem key="home">ホーム</BreadcrumbItem>
        <BreadcrumbItem key="sample-1">サンプルテキスト1</BreadcrumbItem>
        <BreadcrumbItem key="sample-2">サンプルテキスト2</BreadcrumbItem>
        <BreadcrumbItem key="sample-3">サンプルテキスト3</BreadcrumbItem>
        <BreadcrumbItem key="before-last">1つ前のページ</BreadcrumbItem>
        <BreadcrumbItem key="current">今いるページ</BreadcrumbItem>
      </Breadcrumbs>
    </section>
  </div>
);

All.parameters = {
  pseudo: {
    hover: "#hover-overflow",
  },
};
