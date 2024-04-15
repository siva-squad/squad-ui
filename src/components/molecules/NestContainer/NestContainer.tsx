import clsx from "clsx";
import { NEST_CONTAINER_VARIANTS } from "./const";
import { NestContainerProps } from "./type";

export const NestContainer = ({ children, className, ...props }: NestContainerProps) => {
  return (
    <div
      {...props}
      className={clsx(NEST_CONTAINER_VARIANTS({}), className ?? "")}
    >
      {children}
    </div>
  );
};
