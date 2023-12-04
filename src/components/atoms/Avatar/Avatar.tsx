import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import type { AvatarProps } from "./type";

export const Avatar = ({ src, onClick, size = 32 }: AvatarProps) => {
  const [isError, setIsError] = useState(false);

  return (
    <button
      onClick={onClick}
      style={{
        height: size,
        width: size,
      }}
      type="button"
      className={onClick ? "cursor-pointer" : "cursor-default"}
    >
      {!src || isError ? (
        <UserCircleIcon className="aspect-square rounded-full text-gray ring-4 ring-inset ring-gray" />
      ) : (
        <img
          src={src}
          alt="avatar"
          width={size}
          height={size}
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
