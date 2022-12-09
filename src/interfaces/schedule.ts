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
