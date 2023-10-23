import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";

import { INPUT_ICON_CLASS_NAME, INPUT_CONTAINER_CLASS_NAME } from "../const";
import { InputTextProps } from "./type";

export const InputText = ({
  type = "text",
  showSuccess = false,
  state,
  ...props
}: InputTextProps) => {
  const isSuccess = state !== "error" && showSuccess;

  return (
    <div className="relative">
      <input
        className={INPUT_CONTAINER_CLASS_NAME({ isSuccess, isError: state === "error" })}
        type={type}
        {...props}
      />

      {state === "error" && (
        <ExclamationCircleIcon className={INPUT_ICON_CLASS_NAME({ isError: true })} />
      )}
      {isSuccess && <CheckCircleIcon className={INPUT_ICON_CLASS_NAME({ isSuccess: true })} />}
    </div>
  );
};
