# 💡 React Native Brightness (New & Old Arch) 🌟

[![npm version](https://img.shields.io/npm/v/react-native-brightness-newarch.svg)](https://www.npmjs.com/package/react-native-brightness-newarch)
[![npm downloads](https://img.shields.io/npm/dm/react-native-brightness-newarch.svg)](https://www.npmjs.com/package/react-native-brightness-newarch)
[![Build Status](https://github.com/ahmedawaad1804/react-native-brightness-newarch/actions/workflows/ci.yml/badge.svg)](https://github.com/ahmedawaad1804/react-native-brightness-newarch/actions)
[![License](https://img.shields.io/npm/l/react-native-brightness-newarch.svg)](./LICENSE)
[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/react-native-brightness-newarch.svg)](https://bundlephobia.com/package/react-native-brightness-newarch)
[![Platform](https://img.shields.io/badge/platform-react--native-blue.svg)](https://reactnative.dev)
[![Architecture](https://img.shields.io/badge/Supports-New%20%26%20Old%20Architecture-success.svg)](https://reactnative.dev/architecture/)

**Easily control the screen brightness** in your React Native app — compatible with both **New and Old Architecture**! ✨

---

## 📱 Supported Minimum Versions

- **iOS**: 12.0
- **Android**: 21 (Lollipop)

Control the screen brightness without writing any native code.

---

## 🛠️ Installation

```bash
npm install react-native-brightness-newarch
```

_No extra linking needed for modern React Native versions._

---

## 🚀 Usage

Brightness values must be between `0` (minimum) and `1` (maximum).

```js
import RNBrightness from "react-native-brightness-newarch";

// Set brightness to 50%
RNBrightness.setBrightnessLevel(0.5);

// Get current brightness
const current = await RNBrightness.getBrightnessLevel();
console.log(`Current brightness is: ${current}`);
```

> ⚠️ Out-of-range values are automatically clamped between 0 and 1.

---

## 🧱 Architecture

This module automatically detects and supports both:

- **New Architecture** (Fabric + TurboModules)
- **Old Architecture** (Paper)

No configuration needed — it just works.

---

## 🧐 Why Use This?

✅ Supports the **New Architecture** (TurboModules Ready)  
✅ Fully **Backward Compatible**  
✅ **No Native Tweaks** required (Plug & Play)  
✅ Simple, **Cross-Platform API**  
✅ Lightweight and **Zero Dependencies**

---

## 🤝 Contributing

We welcome pull requests, issues, and ideas!  
See the [contributing guide](CONTRIBUTING.md) for details.

---

## 📜 License

[MIT](./LICENSE)
