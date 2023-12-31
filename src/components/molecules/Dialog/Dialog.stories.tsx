import { useState } from "react";
import { Button, InputText, Selector } from "@components/atoms";
import type { Meta, StoryObj } from "@storybook/react";

import { Dialog } from "./Dialog";

export default {
  component: Dialog,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof Dialog>;

export const Default: StoryObj<typeof Dialog> = {
  args: {
    children: <p className="p-10">With a little bit of text</p>,
    title: "Dialog",
    onClose: () => console.log("close"),
    isOpen: true,
  },
  decorators: [
    (Story) => (
      <div
        data-testid="root"
        style={{ margin: "3em" }}
      >
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ad architecto vitae
          deleniti odit labore maiores sapiente error nesciunt suscipit quod, eum veritatis. Minus,
          molestiae dignissimos. Asperiores consequatur laudantium sit! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Modi molestias autem sit tenetur repudiandae pariatur optio
          recusandae sapiente. Nisi, obcaecati! Commodi sint voluptates voluptatum sequi sunt in rem
          facilis a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dignissimos
          quibusdam veniam voluptate ut, nihil pariatur qui enim dolorem ea vero atque
          necessitatibus aut, excepturi magnam reiciendis explicabo aperiam veritatis!
        </div>
        <Story />
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ad architecto vitae
          deleniti odit labore maiores sapiente error nesciunt suscipit quod, eum veritatis. Minus,
          molestiae dignissimos. Asperiores consequatur laudantium sit! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Modi molestias autem sit tenetur repudiandae pariatur optio
          recusandae sapiente. Nisi, obcaecati! Commodi sint voluptates voluptatum sequi sunt in rem
          facilis a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dignissimos
          quibusdam veniam voluptate ut, nihil pariatur qui enim dolorem ea vero atque
          necessitatibus aut, excepturi magnam reiciendis explicabo aperiam veritatis!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ad architecto vitae
          deleniti odit labore maiores sapiente error nesciunt suscipit quod, eum veritatis. Minus,
          molestiae dignissimos. Asperiores consequatur laudantium sit! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Modi molestias autem sit tenetur repudiandae pariatur optio
          recusandae sapiente. Nisi, obcaecati! Commodi sint voluptates voluptatum sequi sunt in rem
          facilis a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dignissimos
          quibusdam veniam voluptate ut, nihil pariatur qui enim dolorem ea vero atque
          necessitatibus aut, excepturi magnam reiciendis explicabo aperiam veritatis!
        </div>
      </div>
    ),
  ],
};

export const Controlled = () => {
  // Actual Use case
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        theme="primary"
        size="medium"
        onClick={() => setIsOpen(true)}
      >
        Open dialog
      </Button>
      <Dialog
        title="Base Dialog example"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <p className="p-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit aspernatur velit
          modi nesciunt aliquam quasi quam exercitationem aut doloribus reiciendis mollitia dolores
          facilis sed, a itaque labore eum natus.
        </p>
      </Dialog>
    </>
  );
};

export const ControlledWithScroll = () => {
  // Actual Use case
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        theme="primary"
        size="medium"
        onClick={() => setIsOpen(true)}
      >
        Open dialog
      </Button>
      <Dialog
        title="Base Dialog example"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="p-10">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit aspernatur
            velit modi nesciunt aliquam quasi quam exercitationem aut doloribus reiciendis mollitia
            dolores facilis sed, a itaque labore eum natus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit aspernatur
            velit modi nesciunt aliquam quasi quam exercitationem aut doloribus reiciendis mollitia
            dolores facilis sed, a itaque labore eum natus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit aspernatur
            velit modi nesciunt aliquam quasi quam exercitationem aut doloribus reiciendis mollitia
            dolores facilis sed, a itaque labore eum natus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit aspernatur
            velit modi nesciunt aliquam quasi quam exercitationem aut doloribus reiciendis mollitia
            dolores facilis sed, a itaque labore eum natus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit aspernatur
            velit modi nesciunt aliquam quasi quam exercitationem aut doloribus reiciendis mollitia
            dolores facilis sed, a itaque labore eum natus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit aspernatur
            velit modi nesciunt aliquam quasi quam exercitationem aut doloribus reiciendis mollitia
            dolores facilis sed, a itaque labore eum natus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit aspernatur
            velit modi nesciunt aliquam quasi quam exercitationem aut doloribus reiciendis mollitia
            dolores facilis sed, a itaque labore eum natus.
          </p>
        </div>
      </Dialog>
    </>
  );
};

export const ControlledWithSelectorAndInput = () => {
  // Actual Use case
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        theme="primary"
        size="medium"
        onClick={() => setIsOpen(true)}
      >
        Open dialog
      </Button>
      <Dialog
        title="Base Dialog example"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="flex flex-col gap-20 p-10">
          <Selector
            size="normal"
            options={[
              { id: 1, label: "Option 1", value: "1" },
              { id: 2, label: "Option 2", value: "2" },
            ]}
            defaultLabel="Select an option"
            onSelect={() => {}}
          />
          <InputText placeholder="Input some text" />
        </div>
      </Dialog>
    </>
  );
};

export const ControlledWithButton = () => {
  // Actual Use case
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        theme="primary"
        size="medium"
        onClick={() => setIsOpen(true)}
      >
        Open dialog
      </Button>
      <Dialog
        title="Base Dialog example"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="px-10 pb-5 pt-10">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit aspernatur
            velit modi nesciunt aliquam quasi quam exercitationem aut doloribus reiciendis mollitia
            dolores facilis sed, a itaque labore eum natus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit aspernatur
            velit modi nesciunt aliquam quasi quam exercitationem aut doloribus reiciendis mollitia
            dolores facilis sed, a itaque labore eum natus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit aspernatur
            velit modi nesciunt aliquam quasi quam exercitationem aut doloribus reiciendis mollitia
            dolores facilis sed, a itaque labore eum natus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit aspernatur
            velit modi nesciunt aliquam quasi quam exercitationem aut doloribus reiciendis mollitia
            dolores facilis sed, a itaque labore eum natus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit aspernatur
            velit modi nesciunt aliquam quasi quam exercitationem aut doloribus reiciendis mollitia
            dolores facilis sed, a itaque labore eum natus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit aspernatur
            velit modi nesciunt aliquam quasi quam exercitationem aut doloribus reiciendis mollitia
            dolores facilis sed, a itaque labore eum natus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit aspernatur
            velit modi nesciunt aliquam quasi quam exercitationem aut doloribus reiciendis mollitia
            dolores facilis sed, a itaque labore eum natus.
          </p>
        </div>
        <div className="flex items-center justify-end gap-2 border-t border-t-gray-light px-10 py-4">
          <Button
            theme={"white"}
            background="white"
            size="medium"
            onClick={() => setIsOpen(false)}
          >
            キャンセル
          </Button>
          <Button
            theme={"primary"}
            size="medium"
            onClick={() => console.log("save")}
          >
            保存する
          </Button>
        </div>
      </Dialog>
    </>
  );
};
