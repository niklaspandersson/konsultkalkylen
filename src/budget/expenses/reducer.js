export const InitialState = reducer(
  {
    monthly: 3000,
    yearly: 2000,
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
      title: 'Månatliga utgifter',
      unitPrice: -next.monthly,
      units: 12,
    },
    {
      title: 'Årliga utgifter',
      unitPrice: -next.yearly,
      units: 1,
    },
  ];

  return next;
}
