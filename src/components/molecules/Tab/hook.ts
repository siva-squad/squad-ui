import { useContext } from "react";

import { TabContext } from "./context";

export const useTab = () => {
  return useContext(TabContext);
};
