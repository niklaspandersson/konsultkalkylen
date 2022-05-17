export const InitialState = reducer({}, {}, true);
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
      title: 'Blandat',
      unitPrice: -5000,
      units: 12,
    },
  ];

  return next;
}
