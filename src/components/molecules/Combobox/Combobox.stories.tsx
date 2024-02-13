import type { Meta, StoryObj } from "@storybook/react";

import { Combobox } from "./Combobox";

export default {
  component: Combobox,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof Combobox>;

export const Default: StoryObj<typeof Combobox> = {
  args: {
    listName: "Test list",
    disabled: false,
    placeholder: "Option 456",
    size: "normal",
    isRequired: true,
    showLabel: true,
    labelText: "Options",
    options: [
      {
        id: "1",
        name: "Option 1",
      },
      {
        id: "2",
        name: "Option 2",
      },
      {
        id: "3",
        name: "Option 3",
      },
      {
        id: "4",
        name: "Option 4",
      },
      {
        id: "5",
        name: "Option 5",
      },
    ],
  },
};

export const LongList: StoryObj<typeof Combobox> = {
  args: {
    listName: "States",
    disabled: false,
    size: "normal",
    isRequired: false,
    labelText: "State",
    options: [
      {
        id: "1",
        name: "Alabama",
      },
      {
        id: "2",
        name: "Alaska",
      },
      {
        id: "3",
        name: "Arizona",
      },
      {
        id: "4",
        name: "Arkansas",
      },
      {
        id: "5",
        name: "California",
      },
      {
        id: "6",
        name: "Colorado",
      },
      {
        id: "7",
        name: "Connecticut",
      },
      {
        id: "8",
        name: "Delaware",
      },
      {
        id: "9",
        name: "Columbia",
      },
      {
        id: "10",
        name: "Florida",
      },
      {
        id: "11",
        name: "Georgia",
      },
      {
        id: "12",
        name: "Guam",
      },
      {
        id: "13",
        name: "Hawaii",
      },
      {
        id: "14",
        name: "Idaho",
      },
      {
        id: "15",
        name: "Indiana",
      },
      {
        id: "16",
        name: "Kansas",
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="grid min-h-screen content-center">
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam voluptatum
            obcaecati labore dolorum illo sed, optio sequi ipsam molestiae id consequatur veniam
            deserunt vitae, modi quidem ipsum repellendus nesciunt.
          </p>
          <Story />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, accusamus inventore.
            Unde architecto illo esse autem magnam nobis praesentium laudantium earum ab? Quo
            ratione mollitia quaerat eligendi qui asperiores hic!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui recusandae illo dolore
            fugiat saepe ullam accusamus ipsam eligendi ex aperiam sint quasi iure dicta, sequi,
            nihil reiciendis obcaecati! Sunt, et.
          </p>
        </div>
      </div>
    ),
  ],
};
