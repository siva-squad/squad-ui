// TODO: PRマージ後、ListItemで置換
type ListItemProps = { onClick?: () => void; title: string; description?: string };
export const ListItem = ({ onClick, title, description }: ListItemProps) => {
  return (
    <a
      {...(!onClick && { href: "" })}
      className="flex flex-col gap-y-2 break-keep p-2 text-s leading-none"
      onClick={onClick}
      role={onClick ? "button" : ""}
    >
      <span>{title}</span>
      <span>{description}</span>
    </a>
  );
};
