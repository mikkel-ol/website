import { useRef, useState } from "react";
import { useKonami } from "../hooks/use-konami";
import { usePointer } from "../hooks/use-pointer";
import { isMobile } from "react-device-detect";
import { useFunModeContext } from "../contexts/use-fun-mode-context";

export const Searchlight: React.FC = () => {
  const box = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);
  const { x, y } = usePointer();
  const { enabled: funModeEnabled } = useFunModeContext();

  const background = funModeEnabled
    ? `radial-gradient(150px at ${x}px ${y}px, rgba(29, 78, 216, 0.25), transparent 80%)`
    : isMobile
    ? `radial-gradient(300px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
    : `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;

  useKonami(() => {
    setOpacity(0);
  });

  return (
    <div
      ref={box}
      className="fixed inset-0 z-50 pointer-events-none transition-all duration-1000"
      style={{
        background: background,
        opacity: opacity,
      }}
    ></div>
  );
};
