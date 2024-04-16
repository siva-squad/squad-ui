import clsx from "clsx";
import { NestContainerProps } from "./type";

export const NestContainer = ({ children, className, ...props }: NestContainerProps) => {
  return (
    <div
      {...props}
      className={clsx("border-l-2 border-gray-light pl-6", className ?? "")}
    >
      {children}
    </div>
  );
};
