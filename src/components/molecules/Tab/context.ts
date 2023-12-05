import { createContext } from "react";

import type { Dispatch, SetStateAction } from "react";

export const TabContext = createContext<{
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}>({
  currentPage: 1,
  setCurrentPage: () => {},
});
