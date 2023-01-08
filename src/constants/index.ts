import { IInputPickerItem } from "../components/InputPicker";
import { EditScheduleForm } from "../home/hooks/useEditSchedule";

interface Weekdays {
  dayNumber: number;
  keyName: keyof EditScheduleForm;
  name: 'Lunes' | 'Martes' | 'Miercoles' | 'Jueves' | 'Viernes' | 'Sabado' | 'Domingo';
  abbreviation: 'LU' | 'MA' | 'MI' | 'JU' | 'VI' | 'SA' | 'DO';
}

export const weekdays: Weekdays[] = [
  {
    dayNumber: 1,
    keyName: 'monday',
    name: 'Lunes',
    abbreviation: 'LU',
  },
  {
    dayNumber: 2,
    keyName: 'tuesday',
    name: 'Martes',
    abbreviation: 'MA',
  },
  {
    dayNumber: 3,
    keyName: 'wednesday',
    name: 'Miercoles',
    abbreviation: 'MI',
  },
  {
    dayNumber: 4,
    keyName: 'thursday',
    name: 'Jueves',
    abbreviation: 'JU',
  },
  {
    dayNumber: 5,
    keyName: 'friday',
    name: 'Viernes',
    abbreviation: 'VI',
  },
  {
    dayNumber: 6,
    keyName: 'saturday',
    name: 'Sabado',
    abbreviation: 'SA',
  },
  {
    dayNumber: 7,
    keyName: 'sunday',
    name: 'Domingo',
    abbreviation: 'DO',
  },
];

export enum Levels {
  LOW = '0',
  MEDIUM = '1',
  HIGH = '2'
};

export const levels: IInputPickerItem[] = [
  {
    label: 'Bajo',
    value: Levels.LOW,
    active: false,
  },
  {
    label: 'Medio',
    value: Levels.MEDIUM,
    active: true,
  },
  {
    label: 'Alto',
    value: Levels.HIGH,
    active: false,
  },
];
