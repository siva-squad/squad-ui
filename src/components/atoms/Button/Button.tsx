import { ButtonProp } from "./type";

export const Button = ({ children }: ButtonProp) => (
  <button className="rounded-full bg-black px-4 py-2 font-bold text-white">{children}</button>
);
