import clsx from "clsx";
import { RequiredBadge } from "../../atoms/RequiredBadge";
import type { InputElementProps } from "./type";

export const InputElement = ({
  htmlFor,
  render,
  label,
  errorText,
  description,
  showLabel = true,
  showRequired = true,
  isRequired = true,
  optionalText,
  requiredText,
  occupyErrorArea = false,
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
      {!!description &&
        (typeof description === "string" ? (
          <p className="text-xs leading-normal text-gray-dark">{description}</p>
        ) : (
          description
        ))}
      {elementUI}
      {errorText ? (
        <p className="text-xs leading-normal text-red">{errorText}</p>
      ) : occupyErrorArea ? (
        // NOTE: チラつき対策でエラーテキストの表示領域確保
        <span className="invisible text-xs leading-normal">-</span>
      ) : null}
    </div>
  );
};
