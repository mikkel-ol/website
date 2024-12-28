import { useState, useEffect } from "react";

export type Position = {
  x: number;
  y: number;
};

export const useCursor = () => {
  const [{ x, y }, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const cb = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event;

      setPosition({ x, y });
    };

    document.addEventListener("mousemove", cb);

    return () => document.removeEventListener("mousemove", cb);
  }, []);

  return { x, y };
};
