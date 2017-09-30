package com.moxie.mxtoast;

import android.text.TextUtils;
import android.view.Gravity;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

import java.util.HashMap;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;

import javax.annotation.Nullable;

/**
 * Created by bbbond on 2017/9/30.
 */

public class MXToastModule extends ReactContextBaseJavaModule {

  private final String TOP = "TOP";
  private final String BOTTOM = "BOTTOM";
  private final String CENTER = "CENTER";

  private final String SHORT = "SHORT";
  private final String LONG = "LONG";

  @Nullable
  @Override
  public Map<String, Object> getConstants() {
    Map<String, Object> constants = new HashMap<>();
    constants.put(TOP, Gravity.TOP);
    constants.put(BOTTOM, Gravity.BOTTOM);
    constants.put(CENTER, Gravity.CENTER);

    constants.put(SHORT, Toast.LENGTH_SHORT);
    constants.put(LONG, Toast.LENGTH_LONG);
    return constants;
  }

  public MXToastModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "MXToastBridge";
  }

  @ReactMethod
  public void show(String msg, ReadableMap params) {
    if (TextUtils.isEmpty(msg) || getCurrentActivity() == null) return;
    Toast toast = Toast.makeText(getCurrentActivity(), msg, Toast.LENGTH_SHORT);
    if (params == null) {
      toast.show();
    } else {
      if (params.hasKey("gravity") && !params.isNull("gravity")) {
        int gravity = params.getInt("gravity");
        if (params.hasKey("margin") && !params.isNull("margin")) {
          toast.setGravity(gravity, 0, params.getInt("margin"));
        } else {
          toast.setGravity(gravity, 0, 0);
        }
      }
      showToast(toast, params.hasKey("duration") ? params.getInt("duration") : Toast.LENGTH_SHORT);
    }
  }

  private void showToast(final Toast toast, int duration) {
    if (duration == 0 || duration == 1) {
      toast.setDuration(duration);
      toast.show();
    } else {
      final Timer timer = new Timer();
      timer.schedule(new TimerTask() {
        @Override
        public void run() {
          toast.setDuration(Toast.LENGTH_LONG);
          toast.show();
        }
      }, 0, 3000);

      Timer timer1 = new Timer();
      timer1.schedule(new TimerTask() {
        @Override
        public void run() {
          toast.cancel();
          timer.cancel();
        }
      }, duration);
    }
  }

}
