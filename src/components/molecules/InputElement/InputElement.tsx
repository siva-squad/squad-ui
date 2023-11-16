import { RequiredBadge } from "./RequiredBadge";
import type { InputElementProps } from "./type";

export const InputElement = ({
  children,
  label,
  errorText,
  descriptionText,
  showRequired,
  isRequired,
  optionalText,
  requiredText,
}: InputElementProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      {(!!label || !!showRequired) && (
        <div className="flex items-center gap-x-2">
          {!!label && <label className="text-sm font-medium leading-tight">{label}</label>}
          {!!showRequired && (
            <RequiredBadge
              isRequired={isRequired}
              optionalText={optionalText}
              requiredText={requiredText}
            />
          )}
        </div>
      )}
      {!!descriptionText && (
        <p className="text-xs leading-normal text-gray-dark">{descriptionText}</p>
      )}
      {children}
      {!!errorText && <p className="text-xs leading-normal text-red">{errorText}</p>}
    </div>
  );
};
