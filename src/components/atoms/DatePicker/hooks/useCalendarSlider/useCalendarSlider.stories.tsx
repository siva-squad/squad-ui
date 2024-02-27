import { Button } from "@components/atoms/Button";
import type { Meta, StoryObj } from "@storybook/react";

import { UseCalendarSliderProps } from "./type";
import { useCalendarSlider } from "./useCalendarSlider";

const Dummy = ({ ...props }: UseCalendarSliderProps) => {
  const { render, slideNext, slidePrev, skipTo } = useCalendarSlider({
    duration: 300,
    ...props,
  });

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <Button
          theme="primary"
          variant="outline"
          size="medium"
          onClick={() => slidePrev()}
        >
          前のページ
        </Button>
        <Button
          theme="primary"
          variant="outline"
          size="medium"
          onClick={() => slideNext()}
        >
          次のページ
        </Button>
        <Button
          theme="primary"
          variant="outline"
          size="medium"
          onClick={() => skipTo(new Date())}
        >
          今月に戻る
        </Button>
      </div>
      <div className="w-80">
        {render((month) => (
          <div
            className={"h-[200px] w-full bg-primary-500"}
            key={"1"}
          >
            {`${month.getFullYear()}年 ${month.getMonth() + 1}月`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default {
  component: Dummy,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {},
  args: {},
  render: (args) => <Dummy {...args} />,
} satisfies Meta<typeof Dummy>;

export const Default: StoryObj<typeof Dummy> = {};
