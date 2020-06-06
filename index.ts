import React from 'react';
import { Platform } from 'react-native';
import DatePickerIOS from './datepicker.ios.ui';
import DatePickerAndroid from './datepicker.android.ui';
import { DatePickerProps } from './datepicker.type';

const DatePicker = Platform.select({
  android: DatePickerAndroid,
  ios: DatePickerIOS,
}) as React.FC<DatePickerProps>;

export default DatePicker;
