import type { AreaProps } from "./type";

export const Area = ({ children }: AreaProps) => {
  return (
    <section className="w-full bg-gray-light">
      <div className="p-4">{children}</div>
    </section>
  );
};
