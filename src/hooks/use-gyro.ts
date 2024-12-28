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
  const askPermssion = () => {
    if (DeviceOrientationEvent.requestPermission) {
      DeviceOrientationEvent.requestPermission().then(setPermission);
    }
  };

  // Check if permission is required (iOS 13+)
  useEffect(() => {
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      setRequiresPermission(true);
    }
  }, []);

  // Check if the device supports the gyroscope API
  const testOrientation = (event: DeviceOrientationEvent) => {
    if (event.alpha !== null || event.beta !== null || event.gamma !== null) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", testOrientation);
    return () => window.removeEventListener("deviceorientation", testOrientation);
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

  return { enabled, alpha, beta, gamma, requiresPermission, permission, askPermssion };
};
