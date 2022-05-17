import { Defaults, PensionTax } from '../constants';

export const InitialState = reducer(
  {
    pension: Math.round(Defaults.salary * Defaults.pensionRatio),
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
      title: 'Privat pensionssparande',
      unitPrice: -next.pension,
      units: 12,
    },
    {
      title: `Löneskatt (${(PensionTax * 100).toFixed(
        2,
      )}% av pensionskostnader)`,
      unitPrice: -Math.round(next.pension * PensionTax),
      units: 12,
    },
  ];

  return next;
}
