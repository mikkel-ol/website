import { useFunModeContext } from "../contexts/use-fun-mode-context";
import { useCursor } from "./use-cursor";
import { useGyro } from "./use-gyro";

/**
 * Gets X/Y coordinates from either the cursor of gyro (desktop / mobile)
 */
export const usePointer = () => {
  const { x: cursorX, y: cursorY } = useCursor();
  const { beta, gamma } = useGyro();
  const { enabled: funModeEnabled } = useFunModeContext();

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  const mapToRange = ({ x, min, max, n }: { x: number; min: number; max: number; n: number }) => {
    return (n * (x - min)) / (max - min);
  };

  if (funModeEnabled) {
    const x = mapToRange({
      x: gamma,
      min: 30,
      max: -30,
      n: vw,
    });

    const y = mapToRange({
      x: beta,
      min: 30,
      max: -30,
      n: vh,
    });

    return { x, y };
  } else {
    return { x: cursorX, y: cursorY };
  }
};
