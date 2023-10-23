import { Status } from "./type";

export const getVariantStyles = (status: Status): { backgroundColor: string; color: string } => {
  switch (status) {
    case "info":
      return {
        backgroundColor: "bg-blue-light",
        color: "text-blue-dark",
      };
    case "success":
      return {
        backgroundColor: "bg-green-light",
        color: "text-green-dark",
      };
    case "warning":
      return {
        backgroundColor: "bg-yellow-light",
        color: "text-yellow-dark",
      };
    case "error":
      return {
        backgroundColor: "bg-red-light",
        color: "text-red-dark",
      };
  }
};
