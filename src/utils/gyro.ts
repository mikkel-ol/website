interface DeviceOrientationEventConstructor {
  requestPermission?: () => Promise<"granted" | "denied">;
}

declare const DeviceOrientationEvent: DeviceOrientationEventConstructor;

export class Gyro {
  private static async requestPermission(): Promise<boolean> {
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      const permission = await DeviceOrientationEvent.requestPermission();
      return permission === "granted";
    }

    // assume permission is not needed in environments that do not define `requestPermission`.
    return true;
  }

  private static async detectGyro(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const checkPresence = (e: DeviceOrientationEvent) => {
        const gyroPresent = e.alpha !== null || e.beta !== null || e.gamma !== null;
        resolve(gyroPresent);
      };

      window.addEventListener("deviceorientation", checkPresence, { once: true });

      // timeout if event is not fired
      setTimeout(() => reject(), 1000);
    });
  }

  static async enable(): Promise<boolean> {
    const permissionGranted = await Gyro.requestPermission();
    if (!permissionGranted) return false;

    return await Gyro.detectGyro();
  }
}
