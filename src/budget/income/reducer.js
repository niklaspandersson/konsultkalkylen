import { Defaults, WeeksPerMonth } from '../constants';

export const InitialState = reducer(
  {
    workHoursPerWeek: Defaults.hoursPerWeek,
    vacation: Defaults.vacation,
    sickLeavePercent: Defaults.sickLeavePercent,
    rate: Defaults.price,
    occupancy: Defaults.occupancy,
  },
  {},
  true,
);
const StateKeys = Object.keys(InitialState);

export default function reducer(prev, { payload }, force) {
  if (
    !force &&
    !Object.keys(payload ?? {}).find((key) => StateKeys.includes(key))
  )
    return prev;

  const next = { ...prev, ...payload };
  const workingWeeks = WeeksPerMonth * next.occupancy - next.vacation;
  const workingHours = workingWeeks * next.workHoursPerWeek;
  const payedHours = Math.round(
    workingHours * (1 - next.sickLeavePercent / 100),
  );

  next.rows = [
    {
      title: 'Arvode',
      unitPrice: next.rate,
      units: payedHours,
    },
  ];

  return next;
}
