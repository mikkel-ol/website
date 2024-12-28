import { useState } from "react";
import { useGyro } from "../hooks/use-gyro";
import { useFunModeContext } from "../contexts/use-fun-mode-context";

export type FunModeHeaderProps = {
  text: string;
};

export const FunModeHeader: React.FC<FunModeHeaderProps> = ({ text }) => {
  const [clicks, setClicks] = useState(0);
  const { enabled, askPermission } = useGyro();
  const { setEnabled: setFunMode } = useFunModeContext();

  const handleClick = () => setClicks((x) => x + 1);

  if (!enabled && clicks >= 3) {
    askPermission()?.then(() => setFunMode(true));
  }

  return (
    <h1 className="text-4xl md:text-5xl text-slate-200 font-bold" onClick={handleClick}>
      {text}
    </h1>
  );
};
