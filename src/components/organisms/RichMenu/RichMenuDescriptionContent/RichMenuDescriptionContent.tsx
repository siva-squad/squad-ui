import { Button } from "@components/atoms";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { RichMenuDescriptionContentProps } from "./type";

export const RichMenuDescriptionContent = ({
  headingText,
  description,
  imgSrc,
}: RichMenuDescriptionContentProps) => {
  return (
    <div className="m-4 flex max-h-[400px] w-[544px] flex-col px-6 py-4">
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="text-lg font-bold leading-tight">{headingText}</h2>
        <p className="text-xs leading-normal">{description}</p>
      </div>
      <div className="mt-6 flex-1">
        <img
          src={imgSrc}
          className="rounded-lg object-scale-down"
        />
      </div>
      <div className="mt-4 w-fit self-center">
        <Button
          theme="no-background"
          size="small"
          iconPosition="right"
          icon={<ArrowTopRightOnSquareIcon />}
        >
          利用方法(FAQ)
        </Button>
      </div>
    </div>
  );
};
