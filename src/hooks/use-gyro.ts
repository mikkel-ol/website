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

  const [requiresPermission, setRequiresPermission] = useState(false);
  const [permission, setPermission] = useState<"granted" | "denied" | null>(null);
  const [error, setError] = useState<Error | null>(null);
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

  // Check if the device supports the gyroscope API
  const testOrientation = (event: DeviceOrientationEvent) => {
    if (!requiresPermission && (event.alpha !== null || event.beta !== null || event.gamma !== null)) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", testOrientation);
    return () => window.removeEventListener("deviceorientation", testOrientation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requiresPermission]);

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

  return { enabled, alpha, beta, gamma, requiresPermission, permission, askPermission, error };
};
