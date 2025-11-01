import type { TurboModule } from "react-native";
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  getBrightnessLevel(): Promise<number>;
  setBrightnessLevel(brightnessLevel: number): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>("RNBrightnessNewArch");
