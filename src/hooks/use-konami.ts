import { useCallback, useEffect, useState } from "react";

const KONAMI_CODE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

export const useKonami = (action: () => void, { code = KONAMI_CODE } = {}) => {
  const [input, setInput] = useState<string[]>([]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      setInput((x) => [...x, e.key].slice(-code.length));
    },
    [input, setInput, code, action]
  );

  useEffect(() => {
    if (input.join("") === code.join("")) {
      action();
    }
  }, [input]);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
};
