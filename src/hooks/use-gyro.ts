import { useEffect, useState } from "react";
import { Gyro } from "../utils/gyro";

export const useGyro = () => {
  const [enabled, setEnabled] = useState(false);
  const [alpha, setAlpha] = useState(0);
  const [beta, setBeta] = useState(0);
  const [gamma, setGamma] = useState(0);

  const enable = () => Gyro.enable().then((enabled) => setEnabled(enabled));

  const handleOrientation = (event: DeviceOrientationEvent) => {
    setAlpha(event.alpha ?? 0);
    setBeta(event.beta ?? 0);
    setGamma(event.gamma ?? 0);
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  return { enable, enabled, alpha, beta, gamma };
};
