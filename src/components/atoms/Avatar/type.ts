export type AvatarProps = Pick<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  onClick?: () => void;
};
