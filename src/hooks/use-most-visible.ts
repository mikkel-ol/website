import { RefObject, useCallback, useEffect, useState } from "react";

/**
 * Calculate the most visible ref object in the viewport
 *
 * @param refs A list of refs to find the most visible element on
 * @returns A tuple of the found element and the index of it
 */
export const useMostVisible = (refs: RefObject<HTMLElement | undefined>[]) => {
  const [element, setElement] = useState<RefObject<HTMLElement | undefined>>();
  const [index, setIndex] = useState<number>(0);

  const calculateVisibilityRatio = useCallback((element: HTMLElement | null | undefined) => {
    if (!element) return 0;

    const rect = element.getBoundingClientRect();
    const height = rect.bottom - rect.top;
    const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

    return Math.max(0, Math.min(visibleHeight / height, 1));
  }, []);

  const findMostVisibleElement = useCallback(() => {
    let highestVisibilityRatio = 0;

    refs.forEach((element, index) => {
      let visibilityRatio = calculateVisibilityRatio(element.current);

      if (visibilityRatio > highestVisibilityRatio) {
        highestVisibilityRatio = visibilityRatio;

        setElement(element);
        setIndex(index);
      }
    });
  }, []);

  useEffect(() => {
    const throttle = 100; // in milliseconds
    let lastInvocation = 0;

    const cb = () => {
      const now = new Date().getTime();

      if (now - lastInvocation > throttle) {
        lastInvocation = now;
        findMostVisibleElement();
      }
    };

    window.addEventListener("scroll", cb);

    return () => window.removeEventListener("scroll", cb);
  }, []);

  return [element, index] as const;
};
