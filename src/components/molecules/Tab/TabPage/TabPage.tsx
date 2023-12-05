import type { ReactNode } from "react";

import { useTab } from "../hook";

export const TabPage = ({ page, children }: { page: number; children: ReactNode }) => {
  const { currentPage } = useTab();

  if (currentPage !== page) return <></>;

  return children;
};
