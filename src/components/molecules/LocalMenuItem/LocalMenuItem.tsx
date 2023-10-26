import type { LocalMenuItemProps } from "./type";

export const LocalMenuItem = ({ icon, title }: LocalMenuItemProps) => {
  return (
    <button className="flex h-12 w-12 flex-col items-center justify-center gap-y-1 rounded border-none p-0">
      <span className="text-gray-dark">{icon}</span>
      <span className="text-xxs leading-none text-gray">{title}</span>
    </button>
  );
};
