// TODO: PRマージ後、ListItemで置換
type ListItemProps = { onClick?: () => void };
export const ListItem = ({ onClick }: ListItemProps) => {
  return (
    <a
      {...(!onClick && { href: "" })}
      className="break-keep p-2 text-s leading-none"
      onClick={onClick}
      role={onClick ? "button" : ""}
    >
      テキスト
    </a>
  );
};
