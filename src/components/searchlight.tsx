import { useRef, useState } from "react";
import { useKonami } from "../hooks/use-konami";
import { usePointer } from "../hooks/use-pointer";

export const Searchlight: React.FC = () => {
  const box = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);
  const { x, y } = usePointer();

  useKonami(() => {
    setOpacity(0);
  });

  return (
    <div
      ref={box}
      className="fixed inset-0 z-50 pointer-events-none transition-all duration-1000"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        opacity: opacity,
      }}
    ></div>
  );
};
