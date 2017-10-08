import {NativeModules, Platform} from 'react-native';

let MXToastBridge = NativeModules.MXToastBridge;

let MXToast = {
    TOP: Platform.OS === 'android' ? MXToastBridge.TOP : 'TOP',
    BOTTOM: Platform.OS === 'android' ? MXToastBridge.TOP : 'BOTTOM',
    CENTER: Platform.OS === 'android' ? MXToastBridge.TOP : 'CENTER',
    SHORT: Platform.OS === 'android' ? MXToastBridge.TOP : 'SHORT',
    LONG: Platform.OS === 'android' ? MXToastBridge.TOP : 'LONG',
    show: (msg, duration, gravity, margin) => {
        MXToastBridge.show(msg, {duration, gravity, margin})
    }
};

module.exports = MXToast;