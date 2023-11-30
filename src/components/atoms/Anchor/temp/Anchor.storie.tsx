import { PlusIcon } from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";
import { Anchor } from "./Anchor";
import { AnchorProps } from "./type";

const AnchorSet = ({
  children,
  ...props
}: Pick<AnchorProps, "theme" | "isDisabled" | "isLoading" | "size" | "children">) => {
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
}: Pick<AnchorProps, "theme" | "size" | "children"> & { title: string }) => (
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
        isLoading
      />
      <AnchorSet
        {...props}
        isDisabled
        isLoading
      />
    </div>
  </section>
);

const ThemeTemplate = (props: Pick<AnchorProps, "children" | "theme">) => {
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
    isDisabled: {
      type: "boolean",
    },
    href: {
      type: "string",
    },
    children: {
      type: "symbol",
    },
    isLoading: {
      type: "boolean",
    },
    size: {
      type: "string",
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
    icon: {
      type: "symbol",
    },
    iconPosition: {
      type: "string",
    },
    theme: {
      type: "string",
      control: {
        type: "select",
      },
      options: ["white", "primary", "red", "no-background"],
    },
  },
} satisfies Meta<typeof Anchor>;

export const Default: StoryObj<typeof Anchor> = {
  args: {
    children: "ボタン",
    theme: "primary",
    size: "small",
  },
};

export const Primary = () => <ThemeTemplate theme="primary">アンカー</ThemeTemplate>;
export const Red = () => <ThemeTemplate theme="red">アンカー</ThemeTemplate>;
export const White = () => <ThemeTemplate theme="white">アンカー</ThemeTemplate>;
export const NoBackground = () => <ThemeTemplate theme="no-background">アンカー</ThemeTemplate>;
