import { useState } from "react";
import clsx from "clsx";
import { FullUserCircleIcon } from "./FullUserCircleIcon/FullUserCircleIcon";
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
      className={clsx(
        "relative rounded-full bg-gray",
        onClick ? "cursor-pointer" : "cursor-default",
      )}
    >
      {!src || isError ? (
        <FullUserCircleIcon size={size} />
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
