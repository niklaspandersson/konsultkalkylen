import sumPosts from '../sumPosts';
import sumRows from '../sumRows';
import {
  StandardDeductablesTax,
  DeductablesTax,
  MeanIncomeTax,
  BasicDeduction,
  StateIncomeTax,
  StateIncomeTaxLimit,
} from '../constants';

const relevantPostIds = ['income', 'privatePension', 'expenses'];
export default function calcResult(allPosts) {
  const gross = sumPosts(allPosts, relevantPostIds);

  const afterBasicDeduction = Math.max(0, gross - BasicDeduction);
  const deductions = afterBasicDeduction * StandardDeductablesTax;
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
    net: sumRows(rows),
  };
}
