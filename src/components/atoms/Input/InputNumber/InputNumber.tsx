import { forwardRef } from "react";
import { Badge } from "@components/atoms/Badge";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

import { INPUT_CONTAINER_CLASS_NAME, INPUT_ICON_CLASS_NAME } from "../const";
import type { InputNumberProps } from "./type";

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (
    {
      state,
      showSuccess = false,
      label,
      badgeColor = "lightGray",
      badgeText,
      helperText,
      ...props
    },
    ref,
  ) => {
    const isSuccess = state !== "error" && showSuccess;
    const isBadgeUsed = !!badgeText;
    const isLabelUsed = !!label;
    const isHelperTextUsed = !!helperText;

    return (
      <div className="relative">
        {(isLabelUsed || isBadgeUsed) && (
          <div className="mb-1 flex items-center">
            {isLabelUsed && (
              <label
                className={clsx(
                  "block text-sm font-medium leading-none",
                  isBadgeUsed ? "" : "mb-1",
                )}
                htmlFor={props.id}
              >
                {label}
              </label>
            )}
            {isBadgeUsed && (
              <label
                className={clsx("mb-1", isLabelUsed ? "ml-2" : "grow")}
                htmlFor={props.id}
              >
                <Badge color={badgeColor}>{badgeText}</Badge>
              </label>
            )}
          </div>
        )}
        {isHelperTextUsed && (
          <label
            className="mb-2 block grow text-xs font-normal text-gray-dark"
            htmlFor={props.id}
          >
            {helperText}
          </label>
        )}
        <input
          type="number"
          className={INPUT_CONTAINER_CLASS_NAME({ isError: state === "error", isSuccess })}
          ref={ref}
          {...props}
        />

        {state === "error" && (
          <ExclamationCircleIcon className={INPUT_ICON_CLASS_NAME({ isError: true })} />
        )}
        {isSuccess && <CheckCircleIcon className={INPUT_ICON_CLASS_NAME({ isSuccess: true })} />}
      </div>
    );
  },
);

InputNumber.displayName = "InputNumber";
