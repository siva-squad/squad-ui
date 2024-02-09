import { AvatarProps } from "@components/atoms/Avatar/type";

export type AvatarMultipleProps = {
  avatars: ({ id: string } & Pick<AvatarProps, "size" | "src">)[];
  maxDisplayCount?: number;
  showIndicator?: boolean;
  onClick: () => void;
};
