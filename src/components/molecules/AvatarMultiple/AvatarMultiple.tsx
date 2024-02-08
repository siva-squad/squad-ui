import { Avatar } from "@components/atoms";
import clsx from "clsx";
import type { AvatarMultipleProps } from "./type";

export const AvatarMultiple = ({ avatars, onClick }: AvatarMultipleProps) => {
  return (
    <div className="relative flex items-center">
      {avatars.map((avatar, index) => (
        <div
          key={avatar.id}
          className={clsx(
            "isolate flex items-center justify-center",
            index > 0 && "ml-[-1.5%] rounded-full ring-2  ring-gray-extraLight",
          )}
        >
          <Avatar
            {...avatar}
            onClick={() => onClick?.(avatar.id)}
          />
        </div>
      ))}
    </div>
  );
};
