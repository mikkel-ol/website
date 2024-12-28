import { useContext } from "react";
import { FunModeContext } from "./fun-mode-context";

export const useFunModeContext = () => {
  return useContext(FunModeContext);
};
