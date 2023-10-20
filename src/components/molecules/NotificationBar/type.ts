export type Status = "success" | "info" | "warning" | "error";

export type NotificationBarProps = {
  status: Status;
  notificationText: string;
  onClose: () => void;
  onClick: () => void;
  buttonText: string;
  isUndoButtonShown: boolean;
};
