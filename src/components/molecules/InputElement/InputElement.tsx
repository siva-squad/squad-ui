import clsx from "clsx";
import { RequiredBadge } from "./RequiredBadge";
import type { InputElementProps } from "./type";

export const InputElement = ({
  children,
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
  const visibleGap = !!showLabel && !!showRequired && "gap-x-2";

  return (
    <div className="flex flex-col gap-y-2">
      <div className={clsx("flex items-center", visibleGap)}>
        <label className={visibleLabel}>{label}</label>
        {!!showRequired && (
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
      {children}
      {!!errorText && <p className="text-xs leading-normal text-red">{errorText}</p>}
    </div>
  );
};
