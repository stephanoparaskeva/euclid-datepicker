"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const RCTDatePickerIOS = react_native_1.requireNativeComponent('RNDatePicker');
const DatePickerIOS = ({ style, date, locale, maximumDate, minimumDate, mode, minuteInterval, timeZoneOffsetInMinutes, textColor, onDateChange, }) => {
    const picker = React.useRef(null);
    React.useEffect(() => {
        if (date) {
            const propsTimeStamp = date.getTime();
            if (picker.current) {
                picker?.current?.setNativeProps({
                    date: propsTimeStamp,
                });
            }
        }
    });
    const onChange = (event) => {
        const nativeTimeStamp = event.nativeEvent.timestamp;
        onDateChange && onDateChange(new Date(nativeTimeStamp));
    };
    return (<RCTDatePickerIOS key={textColor} ref={picker} style={[styles.picker, style]} date={date ? date.getTime() : undefined} locale={locale || undefined} maximumDate={maximumDate ? maximumDate.getTime() : undefined} minimumDate={minimumDate ? minimumDate.getTime() : undefined} mode={mode} minuteInterval={minuteInterval} timeZoneOffsetInMinutes={timeZoneOffsetInMinutes} onChange={onChange} onStartShouldSetResponder={() => true} onResponderTerminationRequest={() => false} textColor={textColor}/>);
};
const styles = react_native_1.StyleSheet.create({
    picker: { height: 216, width: 310 },
});
exports.default = DatePickerIOS;
