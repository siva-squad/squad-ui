import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";

import { INPUT_CONTAINER_CLASS_NAME, INPUT_ICON_CLASS_NAME } from "../const";
import type { InputNumberProps } from "./type";

export const InputNumber = ({ state, showSuccess = false, ...props }: InputNumberProps) => {
  const isSuccess = state !== "error" && showSuccess;

  return (
    <div className="relative">
      <input
        type="number"
        className={INPUT_CONTAINER_CLASS_NAME({ isError: state === "error", isSuccess })}
        {...props}
      />

      {state === "error" && (
        <ExclamationCircleIcon className={INPUT_ICON_CLASS_NAME({ isError: true })} />
      )}
      {isSuccess && <CheckCircleIcon className={INPUT_ICON_CLASS_NAME({ isSuccess: true })} />}
    </div>
  );
};
