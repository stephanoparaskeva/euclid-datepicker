// @ts-ignore
import React from 'react';
// @ts-ignore
import { Platform } from 'react-native';
import DatePickerIOS from './datepicker.ios.ui';
import DatePickerAndroid from './datepicker.android.ui';
import { DatePickerProps } from './datepicker.type';

const DatePicker = Platform.select({
  android: DatePickerAndroid,
  ios: DatePickerIOS,
}) as React.FC<DatePickerProps>;

export default DatePicker;
