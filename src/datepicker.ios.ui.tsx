// @ts-ignore
import React, { useEffect, useRef } from 'react';
// @ts-ignore
import { StyleSheet, requireNativeComponent } from 'react-native';
import { DatePickerProps } from './datepicker.type';

const RCTDatePickerIOS = requireNativeComponent<any>('RNDatePicker');

const DatePickerIOS = ({
  style,
  date,
  locale,
  maximumDate,
  minimumDate,
  mode,
  minuteInterval,
  timeZoneOffsetInMinutes,
  textColor,
  onDateChange,
}: DatePickerProps) => {
  const picker = useRef<any>(null);

  useEffect(() => {
    if (date) {
      const propsTimeStamp = date.getTime();

      if (picker.current) {
        picker?.current?.setNativeProps({
          date: propsTimeStamp,
        });
      }
    }
  });

  const onChange = (event: { nativeEvent: { timestamp: string } }) => {
    const nativeTimeStamp = event.nativeEvent.timestamp;
    onDateChange && onDateChange(new Date(nativeTimeStamp));
  };

  return (
    <RCTDatePickerIOS
      key={textColor}
      ref={picker}
      style={[styles.picker, style]}
      date={date ? date.getTime() : undefined}
      locale={locale || undefined}
      maximumDate={maximumDate ? maximumDate.getTime() : undefined}
      minimumDate={minimumDate ? minimumDate.getTime() : undefined}
      mode={mode}
      minuteInterval={minuteInterval}
      timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
      onChange={onChange}
      onStartShouldSetResponder={() => true}
      onResponderTerminationRequest={() => false}
      textColor={textColor}
    />
  );
};

const styles = StyleSheet.create({
  picker: { height: 216, width: 310 },
});

export default DatePickerIOS;
