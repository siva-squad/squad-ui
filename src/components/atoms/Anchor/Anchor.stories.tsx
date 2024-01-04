import { ComponentProps } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";
import { Anchor } from "./Anchor";
import { AnchorProps } from "./type";

const AnchorSet = ({
  children,
  ...props
}: Pick<
  AnchorProps,
  "theme" | "isDisabled" | "loading" | "size" | "children" | "background" | "href"
>) => {
  return (
    <div className="flex gap-2">
      <Anchor {...props}>{children}</Anchor>
      <Anchor
        {...props}
        icon={<PlusIcon />}
        iconPosition="left"
      >
        {children}
      </Anchor>
      <Anchor
        {...props}
        icon={<PlusIcon />}
        iconPosition="right"
      >
        {children}
      </Anchor>
      <Anchor
        {...props}
        icon={<PlusIcon />}
        iconPosition="right"
      />
    </div>
  );
};

const AnchorSetSection = ({
  title,
  ...props
}: Pick<AnchorProps, "theme" | "size" | "children" | "background" | "isDisabled" | "href"> & {
  title: string;
}) => (
  <section>
    <h2 className="mb-2">{title}</h2>
    <div className="flex flex-col gap-2">
      <AnchorSet {...props} />
      <AnchorSet
        {...props}
        isDisabled
      />
      <AnchorSet
        {...props}
        loading
      />
      <AnchorSet
        {...props}
        isDisabled
        loading
      />
    </div>
  </section>
);

const ThemeTemplate = (
  props: Pick<AnchorProps, "children" | "theme" | "onClick" | "background" | "isDisabled" | "href">,
) => {
  return (
    <article className="flex flex-col gap-4">
      <AnchorSetSection
        title="Small"
        size="small"
        {...props}
      />
      <AnchorSetSection
        title="Medium"
        size="medium"
        {...props}
      />
      <AnchorSetSection
        title="Large"
        size="large"
        {...props}
      />
    </article>
  );
};

export default {
  component: Anchor,
  argTypes: {
    theme: {
      type: "string",
      options: ["red", "white", "outline", "gray", "underline"],
      control: {
        type: "select",
      },
    },
    background: {
      type: "string",
      options: ["filled", "white"],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof Anchor>;

export const Default: StoryObj<typeof Anchor> = {
  argTypes: {
    onClick: { action: "clicked" },
  },
  args: {
    children: "ボタン",
    theme: "primary",
    size: "small",
  },
};

export const Primary = () => (
  <ThemeTemplate
    theme="primary"
    href="#"
  >
    ボタン
  </ThemeTemplate>
);
export const Red = (props: ComponentProps<typeof ThemeTemplate>) => (
  <ThemeTemplate
    {...props}
    theme="red"
    href="#"
  >
    ボタン
  </ThemeTemplate>
);
export const White = () => (
  <ThemeTemplate
    theme="white"
    href="#"
  >
    ボタン
  </ThemeTemplate>
);
export const Gray = (props: ComponentProps<typeof ThemeTemplate>) => (
  <ThemeTemplate
    {...props}
    theme="gray"
  >
    ボタン
  </ThemeTemplate>
);
export const NoBackground = () => (
  <ThemeTemplate
    theme="no-background"
    href="#"
  >
    ボタン
  </ThemeTemplate>
);
export const Underline = () => (
  <ThemeTemplate
    theme="underline"
    href="#"
  >
    ボタン
  </ThemeTemplate>
);
