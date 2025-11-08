// src/__tests__/index.test.ts
import RNBrightness, { setBrightnessLevel, getBrightnessLevel } from "../index";
import BrightnessNewArch from "../NativeBrightness";

// Mock the native TurboModule
jest.mock("../NativeBrightness", () => ({
  setBrightnessLevel: jest.fn(),
  getBrightnessLevel: jest.fn().mockResolvedValue(0.5),
}));

describe("RNBrightness Module", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call native setBrightnessLevel when setBrightnessLevel() is called", () => {
    setBrightnessLevel(0.8);
    expect(BrightnessNewArch.setBrightnessLevel).toHaveBeenCalledTimes(1);
    expect(BrightnessNewArch.setBrightnessLevel).toHaveBeenCalledWith(0.8);
  });

  it("should call native getBrightnessLevel when getBrightnessLevel() is called", async () => {
    const level = await getBrightnessLevel();
    expect(BrightnessNewArch.getBrightnessLevel).toHaveBeenCalledTimes(1);
    expect(level).toBe(0.5);
  });

  it("should expose setBrightnessLevel and getBrightnessLevel in RNBrightness object", () => {
    expect(typeof RNBrightness.setBrightnessLevel).toBe("function");
    expect(typeof RNBrightness.getBrightnessLevel).toBe("function");
  });

  it("should call native setBrightnessLevel when using RNBrightness.setBrightnessLevel()", () => {
    RNBrightness.setBrightnessLevel(0.3);
    expect(BrightnessNewArch.setBrightnessLevel).toHaveBeenCalledTimes(1);
    expect(BrightnessNewArch.setBrightnessLevel).toHaveBeenCalledWith(0.3);
  });

  it("should call native getBrightnessLevel when using RNBrightness.getBrightnessLevel()", async () => {
    await RNBrightness.getBrightnessLevel();
    expect(BrightnessNewArch.getBrightnessLevel).toHaveBeenCalledTimes(1);
  });
});
