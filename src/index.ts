import RNBrightnessNewArch from "./NativeBrightness";
import type { RNBrightnessModule } from "./types";

export function setBrightnessLevel(brightnessLevel: number): void {
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
