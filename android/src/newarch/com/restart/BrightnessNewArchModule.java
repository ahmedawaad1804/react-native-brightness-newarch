package com.brightnessnewarch;

import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.bridge.UiThreadUtil;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;

public class BrightnessNewArchModule extends NativeBrightnessSpec {



    private final ReactApplicationContext reactContext;

    public BrightnessNewArchModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    @NonNull
    public String getName() {
        return BrightnessNewArchModuleImpl.NAME;

    }

  
    @Override
    public void setBrightnessLevel(float brightnessLevel) {
        BrightnessNewArchModuleImpl.setBrightnessLevel(reactContext, brightnessLevel);
    }
    @Override
    public void getBrightnessLevel(Promise promise) {
        BrightnessNewArchModuleImpl.getBrightnessLevel(reactContext, promise);
    }

}
