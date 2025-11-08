import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import RNBrightness from "react-native-brightness-newarch";
// import Slider from "@react-native-community/slider";
const isNewArchitectureEnabled = (global as any).__turboModuleProxy != null;

console.log("Is New Architecture enabled?", isNewArchitectureEnabled);

export default function App() {
  const [brightnessLevel, setBrightnessLevel] = useState(0);
  useEffect(() => {
    console.log("Getting Brightness Level");
    RNBrightness.getBrightnessLevel().then((brightnessLevel) => {
      console.log("Brightness Level:", brightnessLevel);
      setBrightnessLevel(brightnessLevel);
    });
  }, []);

  const handleBrightnessChange = (value: number) => {
    console.log("Setting Brightness Level:", value);
    setBrightnessLevel(value);
    RNBrightness.setBrightnessLevel(value);
  };
  return (
    <View style={styles.container}>
      <Text>Brightness Level: {brightnessLevel.toFixed(2)}</Text>
      {/* <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="green"
        maximumTrackTintColor="red"
        value={brightnessLevel}
        onValueChange={handleBrightnessChange}
      /> */}

      <Button
        title="Increase Brightness Level"
        onPress={() => {
          if (brightnessLevel + 0.1 > 1) return;
          setBrightnessLevel(brightnessLevel + 0.1);
          RNBrightness.setBrightnessLevel(20);
        }}
      />
      <Button
        title="Decrease Brightness Level"
        onPress={() => {
          if (brightnessLevel - 0.1 < 0) return;
          setBrightnessLevel(brightnessLevel - 0.1);
          RNBrightness.setBrightnessLevel(brightnessLevel - 0.1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slider: {
    width: 200,
    height: 40,
    backgroundColor: "yellow",
    zIndex: 1000,
  },
});
