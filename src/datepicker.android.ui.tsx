// @ts-ignore
import React from 'react';
// @ts-ignore
import { StyleSheet, requireNativeComponent } from 'react-native';
import { DatePickerProps } from './datepicker.type';

const NativeDatePicker = requireNativeComponent<any>(`DatePickerManager`);

const DatePickerAndroid = ({
  onDateChange,
  onDateStringChange,
  maximumDate,
  minimumDate,
  date,
  timeZoneOffsetInMinutes,
  style,
  ...props
}: DatePickerProps) => {
  const onChange = (event: {
    nativeEvent: { date: Date; dateString: string };
  }) => {
    const jsDate = fromIsoWithTimeZoneOffset(event.nativeEvent.date);
    onDateChange && onDateChange(jsDate);
    if (onDateStringChange) {
      onDateStringChange(event.nativeEvent.dateString);
    }
  };

  const checkMaximumDate = () =>
    maximumDate && toIsoWithTimeZoneOffset(maximumDate);

  const checkMinimumDate = () =>
    minimumDate && toIsoWithTimeZoneOffset(minimumDate);

  const giveDate = () => toIsoWithTimeZoneOffset(date);

  const fromIsoWithTimeZoneOffset = (propDate: Date) => {
    if (timeZoneOffsetInMinutes === undefined) {
      return new Date(propDate);
    }

    const newDate = new Date(propDate);
    newDate.setMinutes(newDate.getMinutes() - timeZoneOffsetInMinutes);
    return newDate;
  };

  const toIsoWithTimeZoneOffset = (propDate: Date | undefined) => {
    if (timeZoneOffsetInMinutes === undefined) {
      return new Date(propDate || new Date()).toISOString();
    }

    const newDate = new Date(propDate || new Date());
    newDate.setMinutes(newDate.getMinutes() + timeZoneOffsetInMinutes);
    return newDate.toISOString();
  };

  return (
    <NativeDatePicker
      {...props}
      date={giveDate()}
      minimumDate={checkMinimumDate()}
      maximumDate={checkMaximumDate()}
      onChange={onChange}
      style={[styles.picker, style]}
      utc={timeZoneOffsetInMinutes !== undefined}
    />
  );
};

const styles = StyleSheet.create({
  picker: { width: 310, height: 180 },
});

export default DatePickerAndroid;
