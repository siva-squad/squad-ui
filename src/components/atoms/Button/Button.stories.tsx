import { ComponentProps } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonProps } from "./type";

const ButtonSet = ({
  children,
  ...props
}: Pick<ButtonProps, "theme" | "disabled" | "loading" | "size" | "children" | "variant">) => {
  return (
    <div className="flex gap-2 items-center">
      <Button {...props}>{children}</Button>
      <Button
        {...props}
        icon={<PlusIcon />}
        iconPosition="left"
      >
        {children}
      </Button>
      <Button
        {...props}
        icon={<PlusIcon />}
        iconPosition="right"
      >
        {children}
      </Button>
      <Button
        {...props}
        icon={<PlusIcon />}
        iconPosition="right"
      />
    </div>
  );
};

const ButtonSetSection = ({
  title,
  ...props
}: Pick<ButtonProps, "theme" | "size" | "children" | "variant"> & { title: string }) => (
  <section>
    <h2 className="mb-2">{title}</h2>
    <div className="flex flex-col gap-2 items-start">
      <ButtonSet {...props} />
      <ButtonSet
        {...props}
        disabled
      />
      <ButtonSet
        {...props}
        loading
      />
      <ButtonSet
        {...props}
        disabled
        loading
      />
    </div>
  </section>
);

const ThemeTemplate = (props: Pick<ButtonProps, "children" | "theme" | "onClick" | "variant">) => {
  return (
    <article className="flex flex-col gap-4 items-start">
      <ButtonSetSection
        title="Small"
        size="small"
        {...props}
      />
      <ButtonSetSection
        title="Medium"
        size="medium"
        {...props}
      />
      <ButtonSetSection
        title="Large"
        size="large"
        {...props}
      />
    </article>
  );
};

export default {
  component: Button,
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
      options: ["fill", "outline", "text"],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  argTypes: {
    onClick: { action: "clicked" },
    type: {
      type: "string",
      options: ["button", "submit", "reset"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    children: "ボタン",
    theme: "primary",
    size: "small",
    disabled: false,
    variant: "fill",
  },
};

export const PrimaryFill = () => (
  <ThemeTemplate
    variant="fill"
    theme="primary"
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
