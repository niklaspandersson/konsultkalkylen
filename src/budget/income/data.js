// Constants
const WeeksPerMonth = 4.25;

// labour time
const DefaultHoursPerWeek = 35;
const DefaultVacation = 6;
const DefaultSickLeavePercent = 5;
// assignments
const DefaultPrice = 830;
const DefaultOccupancy = 9;

export const InitialState = {
  workHoursPerWeek: DefaultHoursPerWeek,
  vacation: DefaultVacation,
  sickLeavePercent: DefaultSickLeavePercent,
  rate: DefaultPrice,
  occupancy: DefaultOccupancy,
};

export function summary(data) {
  const workingWeeks = WeeksPerMonth * data.occupancy - data.vacation;
  const workingHours = workingWeeks * data.workHoursPerWeek;
  const payedHours = Math.round(workingHours * (1 - data.sickLeavePercent / 100));
  return {
    unitPrice: data.rate,
    units: payedHours,
    sum: data.rate * payedHours,
  };  
}