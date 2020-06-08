"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
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
