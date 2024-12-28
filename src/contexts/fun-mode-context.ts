import { createContext } from "react";

type FunMode = {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
};

export const FunModeContext = createContext<FunMode>({ enabled: false, setEnabled: () => {} });
