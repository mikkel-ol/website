import { useEffect, useState } from "react";
import { useFunModeContext } from "../contexts/use-fun-mode-context";
import { useGyro } from "../hooks/use-gyro";

export type FunModeHeaderProps = {
  text: string;
};

export const FunModeHeader: React.FC<FunModeHeaderProps> = ({ text }) => {
  const [clicks, setClicks] = useState(0);
  const { enabled, enable: enableGyro } = useGyro();
  const { setEnabled: setFunMode } = useFunModeContext();

  const handleClick = () => setClicks((x) => x + 1);

  useEffect(() => setFunMode(enabled), [enabled, setFunMode]);

  useEffect(() => {
    if (clicks >= 3) {
      enableGyro();
    }
  }, [clicks, enableGyro]);

  return (
    <h1 className="text-4xl md:text-5xl text-slate-200 font-bold" onClick={handleClick}>
      {text}
    </h1>
  );
};
