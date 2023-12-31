import { forwardRef } from "react";
import { Spinner } from "../Spinner";
import { ANCHOR_CHILDREN_CLASS_NAME, ANCHOR_CLASS_NAME, ANCHOR_ICON_CLASS_NAME } from "./const";
import { AnchorProps } from "./type";

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  (
    {
      children,
      onClick,
      icon,
      size,
      theme,
      background = "filled",
      iconPosition = "left",
      isDisabled = false,
      loading = false,
      href,
    },
    ref,
  ) => {
    const showIcon = !loading && !!icon;
    const spinnerProps = {
      // NOTE: ボタンのサイズが`large`でテキストがない場合はアイコンを大きく表示するため
      size: size === "large" && children ? "medium" : size,
      theme,
      background,
    } as const;

    return (
      <a
        {...(!isDisabled && { href, onClick })}
        className={ANCHOR_CLASS_NAME({
          isDisabled,
          theme,
          isLoading: loading,
          hasChildren: !!children,
          size,
          background,
        })}
        ref={ref}
      >
        {showIcon && iconPosition === "left" && (
          <span
            className={ANCHOR_ICON_CLASS_NAME({ hasChildren: !!children, size, theme, background })}
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
            className={ANCHOR_CHILDREN_CLASS_NAME({
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
            className={ANCHOR_ICON_CLASS_NAME({ hasChildren: !!children, size, theme, background })}
          >
            {icon}
          </span>
        )}
      </a>
    );
  },
);

Anchor.displayName = "Anchor";
