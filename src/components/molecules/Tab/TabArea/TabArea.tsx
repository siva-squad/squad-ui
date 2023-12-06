import { useState } from "react";

import { TabContext } from "../context";
import { TabAreaProps } from "./type";

export const TabArea = ({ children, defaultPage = 1 }: TabAreaProps) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  return (
    <TabContext.Provider
      value={{
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};
