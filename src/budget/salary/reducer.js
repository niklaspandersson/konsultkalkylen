// Constants
const DefaultPensionRatio = 0.05;
export const EmployerFee = 0.3142;
export const PensionTax = 0.2426;

// labour time
const DefaultMonthlySalary = -46200;
const DefaultMonthlyPension = Math.round(DefaultMonthlySalary * DefaultPensionRatio);
const DefaultMonths = 12;

export const InitialState = reducer({
  salary: DefaultMonthlySalary,
  pension: DefaultMonthlyPension,
  months: DefaultMonths,
});

function summary(data) {
  const salaryFee = Math.round(data.salary * EmployerFee);
  const pensionTax = Math.round(data.pension * PensionTax);

  const monthlyCosts = data.salary + salaryFee + data.pension + pensionTax;
  return {
    unitPrice: monthlyCosts,
    units: data.months,
  };
}

export default function reducer(prev, action) {
  const data = prev;
  const rows = [{
    title: 'Lön',
    unitPrice: data.salary,
    units: data.months,
  },
  {
    title: `Arbetsgivaravgift (${Math.round(EmployerFee * 10000) / 100}% av lön)`,
    unitPrice: Math.round(data.salary * EmployerFee),
    units: data.months,
  },
  {
    title: `Avsättning till tjänstepension (per månad)`,
    unitPrice: data.pension,
    units: data.months,
  },
  {
    title: `Löneskatt (${Math.round(PensionTax * 10000) / 100}% av pensionskostnader)`,
    unitPrice: Math.round(data.pension * PensionTax),
    units: data.months,
  },
  ];

  return {...data, rows, summary: summary(data) };
}