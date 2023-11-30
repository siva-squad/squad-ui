import { Anchor } from "@components/atoms/Anchor/temp";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

import type { RichMenuDescriptionProps } from "./type";

export const RichMenuDescription = ({
  headingText,
  description,
  imgSrc,
  faqLink,
}: RichMenuDescriptionProps) => {
  return (
    <div className="m-4 flex max-h-[400px] w-[544px] flex-col px-6 py-4">
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="text-lg font-bold leading-tight">{headingText}</h2>
        <p className="text-xs leading-normal">{description}</p>
      </div>
      <img
        src={imgSrc}
        className="mt-6 flex-1 overflow-hidden rounded-lg object-cover"
        draggable={false}
        alt=""
      />
      <div className="mt-4 w-fit self-center">
        <Anchor
          href={faqLink}
          theme="no-background"
          size="small"
          iconPosition="right"
          icon={<ArrowTopRightOnSquareIcon />}
        >
          利用方法(FAQ)
        </Anchor>
      </div>
    </div>
  );
};
