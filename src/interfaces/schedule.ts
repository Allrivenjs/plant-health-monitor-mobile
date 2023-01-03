export interface IDayOfWeek {
  id: number,
  name: string,
  day: string;
  active: boolean,
};

export interface IDayOfWeekWithWateringCuantity {
  id: number,
  name: string,
  day: string;
  active: boolean,
  cuantity: number;
};

export interface DayOfSchedule {
  id: number;
  dayNumber: number;
  keyName: string;
  name: string;
  abbreviation: string;
  active: boolean;
  cuantity: number;
  created_at: string;
  updated_at: string;
};

export interface Schedule {
  id: number;
  daysOfSchedule: DayOfSchedule[];
  created_at: string;
  updated_at: string;
}
