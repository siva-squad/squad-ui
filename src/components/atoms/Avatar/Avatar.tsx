import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
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
        <>
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
            style={{ height: size / 1.25, width: size / 1.25 }}
          ></div>
          <div
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ width: size, height: size }}
          >
            <UserCircleIcon className="aspect-square rounded-full text-gray" />
          </div>
        </>
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
