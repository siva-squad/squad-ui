import { BreadcrumbItem } from "@components/atoms/BreadcrumbItem";
import { Popover } from "@components/molecules/Popover";
import clsx from "clsx";
import type { BreadcrumbsProps } from "./type";

const DEFAULTS = {
  OVERFLOW_COUNT: 4,
  SLICE_END: -2,
  OVERFLOW_TEXT: "...",
  SEPARATOR: "/",
} as const;

export const Breadcrumbs = ({
  children,
  separator = DEFAULTS.SEPARATOR,
  overflowCount = DEFAULTS.OVERFLOW_COUNT,
  overflowText = DEFAULTS.OVERFLOW_TEXT,
  sliceEnd = DEFAULTS.SLICE_END,
  disableOverflow = false,
}: BreadcrumbsProps) => {
  if (disableOverflow)
    return (
      <ol className="flex gap-2">
        {children
          .map((child, index) => [
            child,
            <BreadcrumbItem key={`breadcrumbsItem-${index}-separator`}>{separator}</BreadcrumbItem>,
          ])
          .flat()
          .slice(0, -1)}
      </ol>
    );

  const overflowItems = children.length >= overflowCount ? children.slice(1, sliceEnd) : null;
  const el = () => {
    return overflowItems != null ? (
      <BreadcrumbItem
        clickable={false}
        key="overflow"
      >
        <Popover
          content={
            <div className="rounded-lg bg-white p-2 shadow-04">
              <ul className={clsx("flex flex-col gap-2", "[&>li]:p-2")}>
                {overflowItems.map((child) => (
                  <BreadcrumbItem
                    disabledLastStyle
                    key={child.key}
                    {...child.props}
                  />
                ))}
              </ul>
            </div>
          }
          position={"bottom"}
        >
          {overflowText}
        </Popover>
      </BreadcrumbItem>
    ) : null;
  };
  const beforeItem = children[0];
  const afterItems = children.slice(sliceEnd);

  const items = [beforeItem, el(), ...afterItems]
    .filter((child) => child != null)
    .map((child, index) => [
      child,
      <BreadcrumbItem key={`breadcrumbsItem-${index}-separator`}>{separator}</BreadcrumbItem>,
    ])
    .flat()
    .slice(0, -1);

  return <ol className="flex gap-2">{items}</ol>;
};
