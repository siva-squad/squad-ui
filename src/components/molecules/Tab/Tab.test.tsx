import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { describe, test } from "vitest";

import { TabArea } from "./TabArea/TabArea";
import { TabNavigation } from "./TabNavigation/TabNavigation";
import { TabPage } from "./TabPage/TabPage";

const Tab = () => (
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

describe("Tab", () => {
  test("renders", async () => {
    render(<Tab />);
  });

  test("Switches pageId on click", async () => {
    const tab = render(<Tab />);

    const page1Button = await tab.findByTestId("navigation-button__1");
    const page2Button = await tab.findByTestId("navigation-button__2");

    expect(page1Button).toBeInTheDocument();
    expect(page2Button).toBeInTheDocument();

    const defaultContentBefore = tab.queryByText("Content 1");
    const secondContentBefore = tab.queryByText("Content 2");
    const thirdContentBefore = tab.queryByText("Content 3");

    expect(defaultContentBefore).toBeInTheDocument();
    expect(secondContentBefore).not.toBeInTheDocument();
    expect(thirdContentBefore).not.toBeInTheDocument();

    fireEvent.click(page2Button);

    const defaultContentAfter = tab.queryByText("Content 1");
    const secondContentAfter = tab.queryByText("Content 2");
    const thirdContentAfter = tab.queryByText("Content 3");

    expect(defaultContentAfter).not.toBeInTheDocument();
    expect(thirdContentAfter).not.toBeInTheDocument();
    expect(secondContentAfter).toBeInTheDocument();
  });
});
