import { UserCircleIcon } from "@heroicons/react/24/solid";

export const FullUserCircleIcon = ({ size }: { size: number }) => {
  return (
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
  );
};
