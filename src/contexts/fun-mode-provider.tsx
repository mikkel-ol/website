import { PropsWithChildren, useState } from "react";
import { FunModeContext } from "./fun-mode-context";

export const FunModeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [enabled, setEnabled] = useState(false);

  return <FunModeContext.Provider value={{ enabled, setEnabled }}>{children}</FunModeContext.Provider>;
};
