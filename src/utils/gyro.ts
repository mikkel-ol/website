interface DeviceOrientationEventConstructor {
  requestPermission?: () => Promise<"granted" | "denied">;
}

declare const DeviceOrientationEvent: DeviceOrientationEventConstructor;

let gyroPresent = false;

const checkPresence = (e: DeviceOrientationEvent) => (gyroPresent = e.alpha !== null || e.beta !== null || e.gamma !== null);

window.removeEventListener("deviceorientation", checkPresence);
window.addEventListener("deviceorientation", checkPresence);

export class Gyro {
  static async enable(): Promise<boolean> {
    window.removeEventListener("deviceorientation", checkPresence);

    if (!gyroPresent) return false;

    return typeof DeviceOrientationEvent.requestPermission === "function"
      ? (await DeviceOrientationEvent.requestPermission()) === "granted"
      : true;
  }
}
