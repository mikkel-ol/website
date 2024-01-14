import { useEffect, useRef, useState } from "react";
import useKonami from "../hooks/use-konami";

type Position = {
  x: number;
  y: number;
};

export const Searchlight: React.FC = () => {
  const box = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);
  const [{ x, y }, setPosition] = useState<Position>({ x: 0, y: 0 });

  useKonami(() => {
    setOpacity(0);
  });

  useEffect(() => {
    const cb = (event: MouseEvent) => {
      const { screenX: x, clientY: y } = event;

      setPosition({ x, y });
    };

    document.addEventListener("mousemove", cb);

    return () => document.removeEventListener("mousemove", cb);
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
