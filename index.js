import {NativeModules, Platform} from 'react-native';

let MXToastBridge = NativeModules.MXToastBridge;

let MXToast = {
    TOP: Platform.OS === 'android' ? MXToastBridge.TOP : 'TOP',
    BOTTOM: Platform.OS === 'android' ? MXToastBridge.BOTTOM : 'BOTTOM',
    CENTER: Platform.OS === 'android' ? MXToastBridge.CENTER : 'CENTER',
    SHORT: Platform.OS === 'android' ? MXToastBridge.SHORT : 2000,
    LONG: Platform.OS === 'android' ? MXToastBridge.LONG : 3500,
    show: (msg, duration, gravity, margin) => {
        MXToastBridge.show(msg, {duration, gravity, margin})
    }
};

module.exports = MXToast;