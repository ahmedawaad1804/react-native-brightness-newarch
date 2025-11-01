package com.brightnessnewarch;


import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import com.facebook.react.TurboReactPackage;
import java.util.HashMap;
import java.util.Map;

public class BrightnessNewarchPackage extends TurboReactPackage {

    @Override
    public NativeModule getModule(String name, ReactApplicationContext reactContext) {
        if (name.equals(BrightnessNewArchModuleImpl.NAME)) {
            return new BrightnessNewArchModule(reactContext);
        }
        return null;
    }

    @Override
    public ReactModuleInfoProvider getReactModuleInfoProvider() {
        return () -> {
            String moduleName = BrightnessNewArchModuleImpl.NAME;
            boolean isTurboModule = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;

            Map<String, ReactModuleInfo> moduleInfos = new HashMap<>();
            moduleInfos.put(moduleName, new ReactModuleInfo(
              moduleName,
              moduleName,
              false, // canOverrideExistingModule
                      false, // needsEagerInit
                      true, // hasConstants
                      false, // isCxxModule
              isTurboModule    // isTurboModule  // isTurboModule
            ));
            return moduleInfos;
        };
    }
}
