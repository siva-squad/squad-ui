import { useContext } from "react";

import { tabContext } from "./context";

export const useTab = () => {
  return useContext(tabContext);
};
