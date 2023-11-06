export type GlobalAccountProps = {
  userId: string;
  userName: string;
  userImage?: string;
  teamName: string;
  onClick: (userId: string) => void;
};
