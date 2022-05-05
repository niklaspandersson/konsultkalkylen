const CorporateTax = 0.206;

export default function calcResult(posts) {
  const allRows = Object.values(posts).flatMap((post) => post.rows);
  const grossResult = allRows.reduce(
    (sum, row) => sum + row.units * row.unitPrice,
    0
  );
  return {
    rows: [
      {
        title: "Bruttoresultat",
        units: 1,
        unitPrice: grossResult,
      },
      {
        title: `Bolagsskatt (${
          Math.round(CorporateTax * 10000) / 100
        }% av vinst)`,
        units: 1,
        unitPrice: -Math.round(Math.max(0, grossResult) * CorporateTax),
      },
    ],
  };
}
