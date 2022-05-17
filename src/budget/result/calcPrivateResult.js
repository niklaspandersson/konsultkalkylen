import sum from '../sumRows';
import {
  StandardDeductablesTax,
  DeductablesTax,
  PensionTax,
  MeanIncomeTax,
  BasicDeduction,
  StateIncomeTax,
  StateIncomeTaxLimit,
  PensionExpensesTitle,
} from '../constants';

const relevantPosts = ['income', 'expenses'];
export default function calcResult(allPosts) {
  const allRows = Object.entries(allPosts)
    .filter(([key, _]) => relevantPosts.includes(key))
    .flatMap(([_, post]) => post.rows);

  const gross = sum(allRows);

  const pensionRow = allPosts?.expenses?.rows?.find(
    (row) => row.title === PensionExpensesTitle,
  );
  const pension = -(pensionRow?.units ?? 0) * (pensionRow?.unitPrice ?? 0);

  const afterBasicDeduction = Math.max(0, gross - BasicDeduction);
  const deductions =
    afterBasicDeduction * StandardDeductablesTax + pension * PensionTax;
  const taxableIncome = afterBasicDeduction - deductions;

  const rows = [
    {
      title: 'Bruttoresultat',
      units: 1,
      unitPrice: gross,
      hidden: true,
    },
    {
      title: `Egenavgifter (${(DeductablesTax * 100).toFixed(2)}%)`,
      units: 1,
      unitPrice: -Math.round(taxableIncome * DeductablesTax),
    },

    {
      title: `Löneskatt (${(PensionTax * 100).toFixed(
        2,
      )}% av pensionskostnader)`,
      units: 1,
      unitPrice: -Math.round(pension * PensionTax),
      hidden: pension === 0,
    },
    {
      title: `Kommunalskatt (${(MeanIncomeTax * 100).toFixed(2)}%)`,
      units: 1,
      unitPrice: -Math.round(taxableIncome * MeanIncomeTax),
    },

    {
      title: `Statlig inkomstskatt (${(StateIncomeTax * 100).toFixed(
        2,
      )}% av inkomst över brytpunkt)`,
      units: 1,
      unitPrice: Math.min(
        0,
        -Math.round((taxableIncome - StateIncomeTaxLimit) * StateIncomeTax),
      ),
      hidden: taxableIncome < StateIncomeTaxLimit,
    },
  ];
  return {
    gross,
    rows,
    net: sum(rows),
  };
}
