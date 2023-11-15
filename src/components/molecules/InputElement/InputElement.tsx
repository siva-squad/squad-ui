import { RequiredBadge } from "./RequiredBadge";
import type { InputElementProps } from "./type";

export const InputElement = ({
  children,
  title,
  errorText,
  descriptionText,
  showRequired,
  isRequired,
  optionalText,
  requiredText,
}: InputElementProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      {(!!title || !!showRequired) && (
        <div className="flex items-center gap-x-2">
          {!!title && <span className="text-sm font-medium leading-tight">{title}</span>}
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
