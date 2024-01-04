import { BreadcrumbItem } from "@components/atoms/BreadcrumbItem";
import { Popover } from "@components/molecules/Popover";
import clsx from "clsx";
import type { BreadcrumbsProps } from "./type";

const OVERFLOW_COUNT = 4 as const;
const SLICE_END = -2 as const;
const OVERFLOW_TEXT = "..." as const;

export const Breadcrumbs = ({ children, separator = "/" }: BreadcrumbsProps) => {
  const overflowItems = children.length >= OVERFLOW_COUNT ? children.slice(1, SLICE_END) : null;
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
          {OVERFLOW_TEXT}
        </Popover>
      </BreadcrumbItem>
    ) : null;
  };
  const beforeItem = children[0];
  const afterItems = children.slice(SLICE_END);

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
