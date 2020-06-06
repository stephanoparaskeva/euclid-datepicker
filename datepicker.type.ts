export type DatePickerProps = {
  date?: Date;
  locale?: string;
  maximumDate?: Date;
  minimumDate?: Date;
  minuteInterval?: 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30;
  mode?: 'date' | 'time' | 'datetime';
  onDateChange: (date: Date) => void;
  timeZoneOffsetInMinutes?: number;
  fadeToColor?: string;
  textColor?: string;
  style?: { [key: string]: Object } | number | false | null;
  onDateStringChange?: (dateString: string) => void;
};
