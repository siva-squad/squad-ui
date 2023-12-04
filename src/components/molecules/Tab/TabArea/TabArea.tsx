import { useState } from "react";

import type { ReactNode } from "react";

import { tabContext } from "../context";

export const TabArea = ({
  children,
  defaultPage = 1,
}: {
  children: ReactNode;
  defaultPage?: number;
}) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  return (
    <tabContext.Provider
      value={{
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </tabContext.Provider>
  );
};
