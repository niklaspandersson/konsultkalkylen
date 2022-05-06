import { Defaults, EmployerFee, PensionTax } from '../constants';

export const InitialState = reducer(
  {
    salary: Defaults.salary,
    pension: Math.round(Defaults.salary * Defaults.pensionRatio),
    months: Defaults.monthsSalary,
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
  next.rows = [
    {
      title: 'Lön',
      unitPrice: -next.salary,
      units: next.months,
    },
    {
      title: `Arbetsgivaravgift (${(EmployerFee * 100).toFixed(2)}% av lön)`,
      unitPrice: -Math.round(next.salary * EmployerFee),
      units: next.months,
    },
    {
      title: `Avsättning till tjänstepension (per månad)`,
      unitPrice: -next.pension,
      units: next.months,
    },
    {
      title: `Löneskatt (${(PensionTax * 100).toFixed(
        2,
      )}% av pensionskostnader)`,
      unitPrice: -Math.round(next.pension * PensionTax),
      units: next.months,
    },
  ];

  return next;
}
