import { Spinner } from "../Spinner";
import { ANCHOR_CHILDREN_CLASS_NAME, ANCHOR_CLASS_NAME, ANCHOR_ICON_CLASS_NAME } from "./const";
import { AnchorProps } from "./type";

export const Anchor = ({
  children,
  icon,
  size,
  theme,
  iconPosition = "left",
  isDisabled = false,
  href,
  isLoading = false,
}: AnchorProps) => {
  const showIcon = !isLoading && !!icon;
  const spinnerProps = {
    // NOTE: ボタンのサイズが`large`でテキストがない場合はアイコンを大きく表示するため
    size: size === "large" && children ? "medium" : size,
    theme: ["red", "primary"].includes(theme) ? "white" : "primary",
  } as const;

  return (
    <a
      {...(!isDisabled && { href })}
      className={ANCHOR_CLASS_NAME({
        theme,
        isLoading,
        hasChildren: !!children,
        size,
        isDisabled,
      })}
    >
      {showIcon && iconPosition === "left" && (
        <span className={ANCHOR_ICON_CLASS_NAME({ hasChildren: !!children, size, theme })}>
          {icon}
        </span>
      )}
      <Spinner
        loading={isLoading}
        {...spinnerProps}
      />
      {children && (
        <span
          className={ANCHOR_CHILDREN_CLASS_NAME({
            size,
            theme,
          })}
        >
          {isLoading ? "読み込み中..." : children}
        </span>
      )}
      {showIcon && iconPosition === "right" && (
        <span className={ANCHOR_ICON_CLASS_NAME({ hasChildren: !!children, size, theme })}>
          {icon}
        </span>
      )}
    </a>
  );
};
