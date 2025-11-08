import RNBrightnessNewArch from "./NativeBrightness";
import type { RNBrightnessModule } from "./types";

export function setBrightnessLevel(brightnessLevel: number): void {
  if (__DEV__) {
    console.log("brightnessLevel", brightnessLevel);

    if (brightnessLevel < 0 || brightnessLevel > 1) {
      console.warn(
        `[RNBrightness] Brightness level should be between 0 and 1. Received: ${brightnessLevel}`
      );
    }
  }

  return RNBrightnessNewArch.setBrightnessLevel(brightnessLevel);
}

export function getBrightnessLevel(): Promise<number> {
  return RNBrightnessNewArch.getBrightnessLevel();
}

const RNBrightness: RNBrightnessModule = {
  setBrightnessLevel,
  getBrightnessLevel,
};

export default RNBrightness;
