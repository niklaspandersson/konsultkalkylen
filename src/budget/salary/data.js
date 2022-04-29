
// Constants
const DefaultPensionRatio = 0.05;
export const EmployerFee = 0.3142;
export const PensionTax = 0.2426;

// labour time
const DefaultMonthlySalary = 46200;
const DefaultMonthlyPension = Math.round(DefaultMonthlySalary * DefaultPensionRatio);
const DefaultMonths = 12;

export const InitialState = {
  salary: DefaultMonthlySalary,
  pension: DefaultMonthlyPension,
  months: DefaultMonths,
};

export const summary = (data) => {
  const salaryFee = Math.round(data.salary * EmployerFee);
  const pensionTax = Math.round(data.pension * PensionTax);

  const monthlyCosts = data.salary + salaryFee + data.pension + pensionTax;
  return {
    unitPrice: -monthlyCosts,
    units: data.months,
    sum: -monthlyCosts * data.months,
  };
}