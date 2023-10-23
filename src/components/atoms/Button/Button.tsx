import { Spinner } from "../Spinner";
import { BUTTON_CHILDREN_CLASS_NAME, BUTTON_CLASS_NAME, BUTTON_ICON_CLASS_NAME } from "./const";
import { ButtonProps } from "./type";

export const Button = ({
  children,
  onClick,
  icon,
  size,
  theme,
  iconPosition = "left",
  disabled = false,
  loading = false,
}: ButtonProps) => {
  const showIcon = !loading && !!icon;
  const spinnerProps = {
    // NOTE: ボタンのサイズが`large`でテキストがない場合はアイコンを大きく表示するため
    size: size === "large" && children ? "medium" : size,
    theme: ["red", "primary"].includes(theme) ? "white" : "primary",
  } as const;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={BUTTON_CLASS_NAME({ theme, isLoading: loading, hasChildren: !!children, size })}
    >
      {showIcon && iconPosition === "left" && (
        <span className={BUTTON_ICON_CLASS_NAME({ hasChildren: !!children, size, theme })}>
          {icon}
        </span>
      )}
      <Spinner
        loading={loading}
        {...spinnerProps}
      />
      {children && (
        <span
          className={BUTTON_CHILDREN_CLASS_NAME({
            size,
            theme,
          })}
        >
          {loading ? "読み込み中..." : children}
        </span>
      )}
      {showIcon && iconPosition === "right" && (
        <span className={BUTTON_ICON_CLASS_NAME({ hasChildren: !!children, size, theme })}>
          {icon}
        </span>
      )}
    </button>
  );
};
