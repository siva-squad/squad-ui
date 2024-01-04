import { BreadcrumbItem } from "@components/atoms/BreadcrumbItem";
import type { BreadcrumbsProps } from "./type";

const OVERFLOW_COUNT = 4 as const;
const SLICE_END = -2 as const;

export const Breadcrumbs = ({ children, separator = "/" }: BreadcrumbsProps) => {
  const overflowItems = children.length >= OVERFLOW_COUNT ? children.slice(1, SLICE_END) : null;
  const el = () => {
    return overflowItems != null ? (
      <BreadcrumbItem
        clickable={false}
        key="overflow"
      >
        ...
      </BreadcrumbItem>
    ) : null;
  };
  const beforeItem = children[0];
  const afterItems = children.slice(SLICE_END);

  const items = [beforeItem, el(), ...afterItems]
    .map((child, index) => [
      child,
      <BreadcrumbItem key={`breadcrumbsItem-${index}-separator`}>{separator}</BreadcrumbItem>,
    ])
    .flat()
    .slice(0, -1);

  return <ol className="flex gap-2">{items}</ol>;
};
