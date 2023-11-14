import { RequiredBadge } from "./RequiredBadge";
import type { InputElementProps } from "./type";

export const InputElement = ({ children }: InputElementProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center gap-x-2">
        <span className="text-sm font-medium leading-tight">タイトル</span>
        <RequiredBadge isRequired />
      </div>
      <p className="text-xs leading-normal text-gray-dark">
        テキストが入ります。テキストが入ります。
      </p>
      {children}
      <p className="text-xs leading-normal text-red">テキストが入ります。テキストが入ります。</p>
    </div>
  );
};
