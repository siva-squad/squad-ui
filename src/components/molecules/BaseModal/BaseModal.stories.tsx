import { useState } from "react";
import { Button } from "@components/atoms";
import type { Meta, StoryObj } from "@storybook/react";

import { BaseModal } from "./BaseModal";

export default {
  component: BaseModal,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
} satisfies Meta<typeof BaseModal>;

export const Default: StoryObj<typeof BaseModal> = {
  args: {
    children: "With a little bit of text",
    title: "Modal",
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
        Open Modal
      </Button>
      {isOpen && (
        <BaseModal
          title="Base Modal example"
          onCloseModal={() => setIsOpen(false)}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit aspernatur
            velit modi nesciunt aliquam quasi quam exercitationem aut doloribus reiciendis mollitia
            dolores facilis sed, a itaque labore eum natus.
          </p>
          <Button
            theme="primary"
            size="medium"
            onClick={() => setIsOpen(false)}
          >
            Close Modal
          </Button>
        </BaseModal>
      )}
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
        Open Modal
      </Button>
      {isOpen && (
        <BaseModal
          title="Base Modal example"
          onCloseModal={() => setIsOpen(false)}
        >
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
          <Button
            theme="primary"
            size="medium"
            onClick={() => setIsOpen(false)}
          >
            Close Modal
          </Button>
        </BaseModal>
      )}
    </>
  );
};
