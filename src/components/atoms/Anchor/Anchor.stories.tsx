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
  "theme" | "isDisabled" | "loading" | "size" | "children" | "variant" | "href"
>) => {
  return (
    <div className="flex gap-2 items-center">
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
}: Pick<AnchorProps, "theme" | "size" | "children" | "variant" | "isDisabled" | "href"> & {
  title: string;
}) => (
  <section>
    <h2 className="mb-2">{title}</h2>
    <div className="flex flex-col gap-2 items-start">
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
  props: Pick<AnchorProps, "children" | "theme" | "onClick" | "variant" | "isDisabled" | "href">,
) => {
  return (
    <article className="flex flex-col gap-2 items-start">
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
      options: ["red", "gray", "primary"],
      control: {
        type: "select",
      },
    },
    variant: {
      type: "string",
      options: ["fill", "outline", "text", "underline"],
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
    variant: "fill",
  },
};

export const PrimaryFill = () => (
  <ThemeTemplate
    variant="fill"
    theme="primary"
    href=""
  >
    ボタン
  </ThemeTemplate>
);
export const RedFill = (props: ComponentProps<typeof ThemeTemplate>) => (
  <ThemeTemplate
    {...props}
    theme="red"
    variant="fill"
  >
    ボタン
  </ThemeTemplate>
);
export const GrayFill = (props: ComponentProps<typeof ThemeTemplate>) => (
  <ThemeTemplate
    {...props}
    theme="gray"
    variant="fill"
  >
    ボタン
  </ThemeTemplate>
);

export const PrimaryOutline = () => (
  <ThemeTemplate
    variant="outline"
    theme="primary"
    href=""
  >
    ボタン
  </ThemeTemplate>
);
export const RedOutline = (props: ComponentProps<typeof ThemeTemplate>) => (
  <ThemeTemplate
    {...props}
    theme="red"
    variant="outline"
  >
    ボタン
  </ThemeTemplate>
);
export const GrayOutline = (props: ComponentProps<typeof ThemeTemplate>) => (
  <ThemeTemplate
    {...props}
    theme="gray"
    variant="outline"
  >
    ボタン
  </ThemeTemplate>
);

export const PrimaryText = () => (
  <ThemeTemplate
    variant="text"
    theme="primary"
    href=""
  >
    ボタン
  </ThemeTemplate>
);
export const RedText = (props: ComponentProps<typeof ThemeTemplate>) => (
  <ThemeTemplate
    {...props}
    theme="red"
    variant="text"
  >
    ボタン
  </ThemeTemplate>
);
export const GrayText = (props: ComponentProps<typeof ThemeTemplate>) => (
  <ThemeTemplate
    {...props}
    theme="gray"
    variant="text"
  >
    ボタン
  </ThemeTemplate>
);

export const PrimaryUnderline = () => (
  <ThemeTemplate
    variant="underline"
    theme="primary"
    href=""
  >
    ボタン
  </ThemeTemplate>
);
export const RedUnderline = (props: ComponentProps<typeof ThemeTemplate>) => (
  <ThemeTemplate
    {...props}
    theme="red"
    variant="underline"
  >
    ボタン
  </ThemeTemplate>
);
export const GrayUnderline = (props: ComponentProps<typeof ThemeTemplate>) => (
  <ThemeTemplate
    {...props}
    theme="gray"
    variant="underline"
  >
    ボタン
  </ThemeTemplate>
);
