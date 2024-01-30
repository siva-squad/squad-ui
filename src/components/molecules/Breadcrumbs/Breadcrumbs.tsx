import { BreadcrumbItem } from "@components/atoms/BreadcrumbItem";
import { Popover } from "@components/molecules/Popover";
import clsx from "clsx";
import { DEFAULTS } from "./const";
import type { BreadcrumbsProps } from "./type";

export const Breadcrumbs = ({
  children,
  separator = DEFAULTS.SEPARATOR,
  overflowCount = DEFAULTS.OVERFLOW_COUNT,
  overflowText = DEFAULTS.OVERFLOW_TEXT,
  sliceEnd = DEFAULTS.SLICE_END,
  disableOverflow = false,
  id,
}: BreadcrumbsProps) => {
  if (disableOverflow)
    return (
      <ol
        className="flex gap-2"
        id={id}
      >
        {children
          .flatMap((child, index) => [
            child,
            <BreadcrumbItem key={`breadcrumbsItem-${index}-separator`}>{separator}</BreadcrumbItem>,
          ])
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
          id={id ? `${id}-overflow` : undefined}
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

  return (
    <ol
      id={id}
      className="flex gap-2"
    >
      {items}
    </ol>
  );
};
