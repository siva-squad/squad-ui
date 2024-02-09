import { Avatar } from "@components/atoms";
import clsx from "clsx";
import type { AvatarMultipleProps } from "./type";

export const AvatarMultiple = ({
  avatars,
  maxDisplayCount = 4,
  onClick,
  showIndicator = true,
}: AvatarMultipleProps) => {
  const displayAvatars = avatars.slice(0).slice(0, maxDisplayCount);

  return (
    <div className="flex w-fit items-center justify-between gap-x-1">
      <button
        className={clsx("relative flex cursor-pointer items-center rounded-sm")}
        onClick={onClick}
        type="button"
      >
        {displayAvatars.map((avatar, index) => (
          <div
            key={avatar.id}
            className={clsx(
              "isolate flex items-center justify-center",
              index > 0 && "ml-[-1.25em] rounded-full ring-2 ring-gray-extraLight",
            )}
          >
            <Avatar
              {...avatar}
              // NOTE: cursor-pointerを有効にする為onClickを追加
              onClick={() => {}}
            />
          </div>
        ))}
      </button>
      {showIndicator && <span className="text-s">{displayAvatars.length}</span>}
    </div>
  );
};
