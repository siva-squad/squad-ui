import { useState } from "react";

import type { ReactNode } from "react";

import { tabContext } from "../context";

export const TabArea = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(1);

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
