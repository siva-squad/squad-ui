import { Avatar } from "@components/atoms";
import clsx from "clsx";
import type { AvatarMultipleProps } from "./type";

export const AvatarMultiple = ({
  avatars,
  maxDisplayCount = 3,
  onClick,
  showIndicator = true,
}: AvatarMultipleProps) => {
  const displayAvatars = avatars.slice(0).slice(0, maxDisplayCount);

  return (
    <div className="flex items-center gap-x-1">
      <div className="relative flex items-center">
        {displayAvatars.map((avatar, index) => (
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
      {showIndicator && <span className="text-s">{displayAvatars.length}</span>}
    </div>
  );
};
