import {
  BasicDeduction,
  MeanIncomeTax,
  StateIncomeTax,
  StateIncomeTaxLimit,
} from '../constants';
import sumRows from '../sumRows';

export default function calcResult({ salary, result }) {
  const totalSalary = (salary?.salary ?? 0) * (salary?.months ?? 1);
  const taxableIncome = Math.max(0, totalSalary - BasicDeduction);
  const dividend = Math.max(0, Math.round(result.net));
  const rows = [
    {
      title: 'Lön',
      units: salary.months,
      unitPrice: salary.salary,
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
    {
      title: `Utdelning`,
      units: 1,
      unitPrice: dividend,
      hidden: !dividend,
    },
    {
      title: `Skatt på kapitalvinst från utdelning`,
      units: 1,
      unitPrice: -Math.round(dividend * StateIncomeTax),
      hidden: !dividend,
    },
  ];
  return {
    rows,
    net: sumRows(rows),
  };
}
