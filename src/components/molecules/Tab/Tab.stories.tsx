import type { Meta } from "@storybook/react";
import { TabArea } from "./TabArea/TabArea";
import { TabNavigation } from "./TabNavigation/TabNavigation";
import { TabPage } from "./TabPage/TabPage";

export default {
  component: TabArea,
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
          { label: "page1", pageId: 2 },
        ]}
      />
      <div>
        <TabPage page={1}>1</TabPage>
        <TabPage page={2}>2</TabPage>
      </div>
    </TabArea>
  );
};
