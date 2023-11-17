import clsx from "clsx";
import { RequiredBadge } from "./RequiredBadge";
import type { InputElementProps } from "./type";

export const InputElement = ({
  htmlFor,
  render,
  label,
  errorText,
  descriptionText,
  showLabel = true,
  showRequired,
  isRequired,
  optionalText,
  requiredText,
}: InputElementProps) => {
  const visibleLabel = showLabel ? "text-sm font-medium leading-tight" : "sr-only";
  const visibleGap = showLabel && showRequired && "gap-x-2";
  const visibleDisplay = !showLabel && !showRequired ? "sr-only" : "flex items-center";

  const elementUI = render({ htmlFor });

  return (
    <div className="flex flex-col gap-y-2">
      <div className={clsx(visibleDisplay, visibleGap)}>
        <label
          htmlFor={htmlFor}
          className={visibleLabel}
        >
          {label}
        </label>
        {showRequired && (
          <RequiredBadge
            isRequired={isRequired}
            optionalText={optionalText}
            requiredText={requiredText}
          />
        )}
      </div>
      {!!descriptionText && (
        <p className="text-xs leading-normal text-gray-dark">{descriptionText}</p>
      )}
      {elementUI}
      {!!errorText && <p className="text-xs leading-normal text-red">{errorText}</p>}
    </div>
  );
};
