import { Avatar } from "@components/atoms";
import type { AvatarMultipleProps } from "./type";

export const AvatarMultiple = ({ avatars, onClick }: AvatarMultipleProps) => {
  return (
    <div className="relative">
      {avatars.map((avatar) => (
        <div key={avatar.id}>
          <Avatar
            {...avatar}
            onClick={() => onClick?.(avatar.id)}
          />
        </div>
      ))}
    </div>
  );
};
