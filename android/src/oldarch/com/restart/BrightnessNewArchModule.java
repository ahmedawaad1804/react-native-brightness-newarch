package com.brightnessnewarch;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Promise;
public class BrightnessNewArchModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public BrightnessNewArchModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return BrightnessNewArchModuleImpl.NAME;
    }

    @ReactMethod
    public void setBrightnessLevel(float brightnessLevel) {
        BrightnessNewArchModuleImpl.setBrightnessLevel(reactContext, brightnessLevel);
    }
    @ReactMethod
    public void getBrightnessLevel( Promise promise) {
        BrightnessNewArchModuleImpl.getBrightnessLevel(reactContext, promise);
    }
}
