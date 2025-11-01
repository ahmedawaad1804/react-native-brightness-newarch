package com.brightnessnewarch;

import android.app.Activity;
import android.view.WindowManager;
import android.provider.Settings;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;

public class BrightnessNewArchModuleImpl {

    public static final String NAME = "RNBrightnessNewArch";
    private static final String TAG = "BrightnessModule";

    /**
     * Restart the host app programmatically.
     */
    public static void restartApp(ReactApplicationContext reactContext) {
        try {
            Intent intent = reactContext
                .getPackageManager()
                .getLaunchIntentForPackage(reactContext.getPackageName());

            if (intent != null) {
                Intent mainIntent = Intent.makeRestartActivityTask(intent.getComponent());
                reactContext.startActivity(mainIntent);
                Runtime.getRuntime().exit(0);
            } else {
                Log.e(TAG, "Launch intent not found for package: " + reactContext.getPackageName());
            }
        } catch (Exception e) {
            Log.e(TAG, "Error restarting app", e);
        }
    }

    /**
     * Set screen brightness for the current window only (0.0f–1.0f).
     */
    public static void setBrightnessLevel(ReactApplicationContext reactContext, final float brightnessLevel) {
        final Activity activity = reactContext.getCurrentActivity();
        if (activity == null) {
            Log.w(TAG, "No current activity found while setting brightness");
            return;
        }

        activity.runOnUiThread(() -> {
            try {
                WindowManager.LayoutParams lp = activity.getWindow().getAttributes();
                lp.screenBrightness = Math.max(0f, Math.min(brightnessLevel, 1f)); // clamp to [0,1]
                activity.getWindow().setAttributes(lp);
            } catch (Exception e) {
                Log.e(TAG, "Failed to set brightness", e);
            }
        });
    }

    /**
     * Get the effective screen brightness level for this window.
     * Returns system brightness if the app hasn’t overridden it.
     */
    public static void getBrightnessLevel(ReactApplicationContext reactContext, Promise promise) {
        try {
            Activity activity = reactContext.getCurrentActivity();
            if (activity == null) {
                promise.reject("NO_ACTIVITY", "No current activity found");
                return;
            }

            WindowManager.LayoutParams lp = activity.getWindow().getAttributes();
            float brightness = lp.screenBrightness;

            // If the window hasn't set its own brightness, use the system level.
            if (brightness < 0f) {
                int systemBrightness = Settings.System.getInt(
                    activity.getContentResolver(),
                    Settings.System.SCREEN_BRIGHTNESS
                );
                brightness = systemBrightness / 255f;
            }

            promise.resolve(brightness);
        } catch (Settings.SettingNotFoundException e) {
            promise.reject("SETTING_NOT_FOUND", e);
        } catch (Exception e) {
            promise.reject("GET_BRIGHTNESS_ERROR", e);
        }
    }

    /**
     * Get the system-wide brightness setting (0.0f–1.0f).
     */
    public static void getSystemBrightnessLevel(ReactApplicationContext reactContext, Promise promise) {
        try {
            Activity activity = reactContext.getCurrentActivity();
            if (activity == null) {
                promise.reject("NO_ACTIVITY", "No current activity found");
                return;
            }

            int brightnessInt = Settings.System.getInt(
                activity.getContentResolver(),
                Settings.System.SCREEN_BRIGHTNESS
            );
            promise.resolve(brightnessInt / 255f);
        } catch (Settings.SettingNotFoundException e) {
            promise.reject("SETTING_NOT_FOUND", e);
        } catch (Exception e) {
            promise.reject("SYSTEM_BRIGHTNESS_ERROR", e);
        }
    }
}
