import { useState } from "react";
import clsx from "clsx";
import { FullUserCircleIcon } from "./FullUserCircleIcon/FullUserCircleIcon";
import type { AvatarProps } from "./type";

export const Avatar = ({ src, onClick, size = 32 }: AvatarProps) => {
  const [isError, setIsError] = useState(false);
  const isButton = typeof onClick === "function";

  const Tag = isButton ? "button" : "span";

  return (
    <Tag
      style={{
        height: size,
        width: size,
      }}
      className={clsx(
        "relative flex items-center justify-center rounded-full bg-gray",
        isButton ? "cursor-pointer" : "cursor-default",
      )}
      {...(isButton && {
        type: "button",
        onClick,
      })}
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
    </Tag>
  );
};
