import { XMarkIcon } from "@heroicons/react/24/solid";
import { NotificationIcon } from "./NotificationIcon";
import { NotificationBarProps } from "./type";
import { getVariantStyles } from "./utils";

export const NotificationBar = ({
  status,
  notificationText,
  onClose,
  onClick,
  buttonText,
  isUndoButtonShown = true,
}: NotificationBarProps) => {
  const { backgroundColor, color } = getVariantStyles(status);

  return (
    <div
      className={`${backgroundColor} inline-flex items-center justify-start gap-4 rounded px-4 py-2`}
    >
      <NotificationIcon status={status} />
      <span className="text-neutral-900 text-xs font-normal leading-tight">{notificationText}</span>
      <div className="flex flex-none items-center justify-start gap-1">
        {isUndoButtonShown && (
          <button
            onClick={onClick}
            className={`${color} text-xs font-normal leading-3`}
          >
            {buttonText}
          </button>
        )}
        <button onClick={onClose}>
          <span className="sr-only">Close notification</span>
          <XMarkIcon className="h-3 w-3 text-gray-dark" />
        </button>
      </div>
    </div>
  );
};
