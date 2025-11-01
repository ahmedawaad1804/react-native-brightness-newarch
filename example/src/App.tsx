import { useEffect, useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import RNBrightness from "react-native-restart-newarch";
import Slider from "@react-native-community/slider";

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
    setBrightnessLevel(value);
    RNBrightness.setBrightnessLevel(value);
  };
  return (
    <View style={styles.container}>
      <Text>Brightness Level: {brightnessLevel.toFixed(2)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="green"
        maximumTrackTintColor="red"
        value={brightnessLevel}
        onValueChange={handleBrightnessChange}
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
  },
});
