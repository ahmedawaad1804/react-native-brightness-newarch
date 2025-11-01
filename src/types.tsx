interface RNBrightnessModule {
  getBrightnessLevel(): Promise<number>;
  setBrightnessLevel(brightnessLevel: number): void;
}

export type { RNBrightnessModule };
