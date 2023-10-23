import { PlusIcon } from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonProps } from "./type";

const ButtonSet = ({
  children,
  ...props
}: Pick<ButtonProps, "theme" | "disabled" | "loading" | "size" | "children">) => {
  return (
    <div className="flex gap-2">
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
}: Pick<ButtonProps, "theme" | "size" | "children"> & { title: string }) => (
  <section>
    <h2 className="mb-2">{title}</h2>
    <div className="flex flex-col gap-2">
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

const ThemeTemplate = (props: Pick<ButtonProps, "children" | "theme" | "onClick">) => {
  return (
    <article className="flex flex-col gap-4">
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
} satisfies Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  argTypes: {
    onClick: { action: "clicked" },
  },
  args: {
    children: "ボタン",
    theme: "primary",
    size: "small",
  },
};

export const Primary = () => <ThemeTemplate theme="primary">ボタン</ThemeTemplate>;
export const Red = () => <ThemeTemplate theme="red">ボタン</ThemeTemplate>;
export const White = () => <ThemeTemplate theme="white">ボタン</ThemeTemplate>;
export const NoBackground = () => <ThemeTemplate theme="no-background">ボタン</ThemeTemplate>;
