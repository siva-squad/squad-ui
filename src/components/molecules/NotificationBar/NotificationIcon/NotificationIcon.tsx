import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { IconStatus } from "./type";

export const NotificationIcon = ({ status }: IconStatus) => {
  return (
    <>
      {status === "success" && <CheckCircleIcon className="h-6 w-6 text-green" />}
      {status === "info" && <ExclamationCircleIcon className="h-6 w-6 text-blue" />}
      {status === "warning" && <ExclamationTriangleIcon className="h-6 w-6 text-yellow" />}
      {status === "error" && <ExclamationCircleIcon className="h-6 w-6 text-red" />}
    </>
  );
};
