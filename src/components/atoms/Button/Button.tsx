import { Spinner } from "../Spinner";
import { BUTTON_CHILDREN_CLASS_NAME, BUTTON_CLASS_NAME, BUTTON_ICON_CLASS_NAME } from "./const";
import { ButtonProps } from "./type";

export const Button = ({
  children,
  onClick,
  icon,
  size,
  theme,
  background = "filled",
  iconPosition = "left",
  disabled = false,
  loading = false,
  type = "button",
}: ButtonProps) => {
  const showIcon = !loading && !!icon;
  const spinnerProps = {
    // NOTE: ボタンのサイズが`large`でテキストがない場合はアイコンを大きく表示するため
    size: size === "large" && children ? "medium" : size,
    theme,
    background,
  } as const;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={BUTTON_CLASS_NAME({
        theme,
        isLoading: loading,
        hasChildren: !!children,
        size,
        background,
      })}
      type={type}
    >
      {showIcon && iconPosition === "left" && (
        <span
          className={BUTTON_ICON_CLASS_NAME({ hasChildren: !!children, size, theme, background })}
        >
          {icon}
        </span>
      )}
      <Spinner
        {...spinnerProps}
        loading={loading}
      />
      {children && (
        <span
          className={BUTTON_CHILDREN_CLASS_NAME({
            size,
            theme,
            background,
            isLoading: loading,
          })}
        >
          {loading ? "読み込み中..." : children}
        </span>
      )}
      {showIcon && iconPosition === "right" && (
        <span
          className={BUTTON_ICON_CLASS_NAME({ hasChildren: !!children, size, theme, background })}
        >
          {icon}
        </span>
      )}
    </button>
  );
};
