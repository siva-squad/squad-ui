import { Spinner } from "../Spinner";
import { BUTTON_CHILDREN_CLASS_NAME, BUTTON_CLASS_NAME, BUTTON_ICON_CLASS_NAME } from "./const";
import { ButtonProps } from "./type";

export const Button = ({
  children,
  onClick,
  icon,
  size,
  theme,
  variant,
  iconPosition = "left",
  disabled = false,
  loading = false,
  type = "button",
}: ButtonProps) => {
  const showIcon = !loading && !!icon;
  const hasChildren = !!children;
  const spinnerProps = {
    // NOTE: ボタンのサイズが`large`でテキストがない場合はアイコンを大きく表示するため
    size: size === "large" && children ? "medium" : size,
    theme,
    variant,
  } as const;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={BUTTON_CLASS_NAME({
        theme,
        isLoading: loading,
        hasChildren,
        size,
        variant,
        showIcon,
        isDisabled: disabled,
      })}
      type={type}
    >
      {showIcon && iconPosition === "left" && (
        <span
          className={BUTTON_ICON_CLASS_NAME({
            hasChildren,
            size,
          })}
        >
          {icon}
        </span>
      )}
      <Spinner
        {...spinnerProps}
        loading={loading}
      />
      {hasChildren && (
        <span
          className={BUTTON_CHILDREN_CLASS_NAME({
            size,
          })}
        >
          {loading ? "読み込み中..." : children}
        </span>
      )}
      {showIcon && iconPosition === "right" && (
        <span
          className={BUTTON_ICON_CLASS_NAME({
            hasChildren,
            size,
          })}
        >
          {icon}
        </span>
      )}
    </button>
  );
};
