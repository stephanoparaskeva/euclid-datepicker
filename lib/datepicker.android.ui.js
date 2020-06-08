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
const NativeDatePicker = react_native_1.requireNativeComponent(`DatePickerManager`);
const DatePickerAndroid = ({ onDateChange, onDateStringChange, maximumDate, minimumDate, date, timeZoneOffsetInMinutes, style, ...props }) => {
    const onChange = (event) => {
        const jsDate = fromIsoWithTimeZoneOffset(event.nativeEvent.date);
        onDateChange && onDateChange(jsDate);
        if (onDateStringChange) {
            onDateStringChange(event.nativeEvent.dateString);
        }
    };
    const checkMaximumDate = () => maximumDate && toIsoWithTimeZoneOffset(maximumDate);
    const checkMinimumDate = () => minimumDate && toIsoWithTimeZoneOffset(minimumDate);
    const giveDate = () => toIsoWithTimeZoneOffset(date);
    const fromIsoWithTimeZoneOffset = (propDate) => {
        if (timeZoneOffsetInMinutes === undefined) {
            return new Date(propDate);
        }
        const newDate = new Date(propDate);
        newDate.setMinutes(newDate.getMinutes() - timeZoneOffsetInMinutes);
        return newDate;
    };
    const toIsoWithTimeZoneOffset = (propDate) => {
        if (timeZoneOffsetInMinutes === undefined) {
            return new Date(propDate || new Date()).toISOString();
        }
        const newDate = new Date(propDate || new Date());
        newDate.setMinutes(newDate.getMinutes() + timeZoneOffsetInMinutes);
        return newDate.toISOString();
    };
    return (<NativeDatePicker {...props} date={giveDate()} minimumDate={checkMinimumDate()} maximumDate={checkMaximumDate()} onChange={onChange} style={[styles.picker, style]} utc={timeZoneOffsetInMinutes !== undefined}/>);
};
const styles = react_native_1.StyleSheet.create({
    picker: { width: 310, height: 180 },
});
exports.default = DatePickerAndroid;
