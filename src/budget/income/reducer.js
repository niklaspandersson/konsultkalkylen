// Constants
const WeeksPerMonth = 4.25;

// labour time
const DefaultHoursPerWeek = 35;
const DefaultVacation = 6;
const DefaultSickLeavePercent = 5;
// assignments
const DefaultPrice = 830;
const DefaultOccupancy = 9;

export const InitialState = reducer({
  workHoursPerWeek: DefaultHoursPerWeek,
  vacation: DefaultVacation,
  sickLeavePercent: DefaultSickLeavePercent,
  rate: DefaultPrice,
  occupancy: DefaultOccupancy,
}, {}, true);
const StateKeys = Object.keys(InitialState);

export default function reducer(prev, { payload }, force) {
  if(!force && !Object.keys(payload ?? {}).find(key => StateKeys.includes(key)))
    return prev;

  const next = {...prev, ...payload };
  const workingWeeks = WeeksPerMonth * next.occupancy - next.vacation;
  const workingHours = workingWeeks * next.workHoursPerWeek;
  const payedHours = Math.round(workingHours * (1 - next.sickLeavePercent / 100));

  next.rows = [
    {
      title: 'Arvode',
      unitPrice: next.rate,
      units: payedHours,
    },
  ];

  return next;
};
