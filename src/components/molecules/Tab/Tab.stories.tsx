import type { Meta } from "@storybook/react";
import { TabArea } from "./TabArea";
import { TabNavigation } from "./TabNavigation";
import { TabPage } from "./TabPage";

export default {
  component: () => <></>,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta;

export const Default = () => {
  return (
    <TabArea>
      <TabNavigation
        tabs={[
          { label: "page1", pageId: 1 },
          { label: "page2", pageId: 2 },
          { label: "page3", pageId: 3 },
        ]}
      />
      <div>
        <TabPage page={1}>Content 1</TabPage>
        <TabPage page={2}>Content 2</TabPage>
        <TabPage page={3}>Content 3</TabPage>
      </div>
    </TabArea>
  );
};
