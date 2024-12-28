import { useCursor } from "./use-cursor";
import { useGyro } from "./use-gyro";

/**
 * Gets X/Y coordinates from either the cursor of gyro (desktop / mobile)
 */
export const usePointer = () => {
  const { x: cursorX, y: cursorY } = useCursor();
  const { enabled: gyroEnabled, beta, gamma } = useGyro();

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  const mapToRange = ({ x, min, max, n }: { x: number; min: number; max: number; n: number }) => {
    return (n * (x - min)) / (max - min);
  };

  if (gyroEnabled) {
    const x = mapToRange({
      x: gamma,
      min: 40,
      max: -40,
      n: vw,
    });

    const y = mapToRange({
      x: beta,
      min: 50,
      max: 140,
      n: vh,
    });

    return { x, y };
  } else {
    return { x: cursorX, y: cursorY };
  }
};