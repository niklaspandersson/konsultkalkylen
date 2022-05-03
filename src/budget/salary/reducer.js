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
}, {}, true);
const StateKeys = Object.keys(InitialState);

export default function reducer(prev, { payload }, force) {
  if(!force && !Object.keys(payload ?? {}).find(key => StateKeys.includes(key)))
    return prev;

  const next = {...prev, ...payload };
  next.rows = [{
    title: 'Lön',
    unitPrice: next.salary,
    units: next.months,
  },
  {
    title: `Arbetsgivaravgift (${Math.round(EmployerFee * 10000) / 100}% av lön)`,
    unitPrice: Math.round(next.salary * EmployerFee),
    units: next.months,
  },
  {
    title: `Avsättning till tjänstepension (per månad)`,
    unitPrice: next.pension,
    units: next.months,
  },
  {
    title: `Löneskatt (${Math.round(PensionTax * 10000) / 100}% av pensionskostnader)`,
    unitPrice: Math.round(next.pension * PensionTax),
    units: next.months,
  },
  ];

  return next;
}