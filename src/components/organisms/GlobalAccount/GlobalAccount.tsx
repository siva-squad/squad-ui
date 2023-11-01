import { Avatar } from "@atoms/Avatar";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import type { GlobalAccountProps } from "./type";

export const GlobalAccount = ({
  userId,
  userName,
  userImage,
  teamName,
  onClick,
}: GlobalAccountProps) => {
  return (
    <button
      className="flex w-fit items-center gap-x-2"
      data-user={userId}
      onClick={() => onClick?.(userId)}
    >
      <Avatar src={userImage} />
      <div className="flex flex-col items-start gap-y-1">
        <span className="text-xs leading-none text-gray-dark">{userName}</span>
        <span className="text-s leading-none text-black">{teamName}</span>
      </div>
      <ChevronDownIcon
        height={16}
        width={16}
        strokeWidth={2}
      />
    </button>
  );
};