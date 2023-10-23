import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import type { AvatarProps } from "./type";

export const Avatar = ({ src, onClick }: AvatarProps) => {
  const [isError, setIsError] = useState(false);

  return (
    <button
      onClick={onClick}
      className="h-8 w-8"
      type="button"
    >
      {!src || isError ? (
        <UserCircleIcon className="aspect-square rounded-full text-gray ring-4 ring-inset ring-gray" />
      ) : (
        <img
          src={src}
          alt="avatar"
          width={32}
          height={32}
          className="aspect-square rounded-full object-cover"
          onLoad={() => {
            setIsError(false);
          }}
          onError={() => {
            setIsError(true);
          }}
          key={src}
        />
      )}
    </button>
  );
};
