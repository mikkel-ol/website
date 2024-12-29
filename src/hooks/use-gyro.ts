import { useEffect, useState } from "react";

interface DeviceOrientationEventConstructor {
  requestPermission?: () => Promise<"granted" | "denied">;
}

declare const DeviceOrientationEvent: DeviceOrientationEventConstructor;

export const useGyro = () => {
  const [enabled, setEnabled] = useState(false);
  const [alpha, setAlpha] = useState(0);
  const [beta, setBeta] = useState(0);
  const [gamma, setGamma] = useState(0);

  const [error, setError] = useState<Error | null>(null);
  const [permission, setPermission] = useState<"granted" | "denied" | null>(null);
  const [requiresPermission, setRequiresPermission] = useState(false);

  const enable = () => {
    if (requiresPermission) {
      askPermission()?.then((x) => setEnabled(!!x));
    } else {
      setEnabled(true);
    }
  };

  const askPermission = () =>
    DeviceOrientationEvent.requestPermission?.()
      .then((x) => {
        setPermission(x);

        if (x === "granted") {
          setEnabled(true);
        }

        return x === "granted";
      })
      .catch((e) => setError(e));

  // Check if permission is required
  useEffect(() => {
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      setRequiresPermission(true);
    }
  }, []);

  // Get values from the gyroscope
  const handleOrientation = (event: DeviceOrientationEvent) => {
    setAlpha(event.alpha ?? 0);
    setBeta(event.beta ?? 0);
    setGamma(event.gamma ?? 0);
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  return { enable, enabled, alpha, beta, gamma, requiresPermission, permission, error };
};
