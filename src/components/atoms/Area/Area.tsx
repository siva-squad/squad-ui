import { AREA_CLASS_NAME } from "./const";
import type { AreaProps } from "./type";

export const Area = ({ children, color = "lightGray", width = "full" }: AreaProps) => {
  return (
    <section className={AREA_CLASS_NAME({ color, width })}>
      <div className="p-4">{children}</div>
    </section>
  );
};
