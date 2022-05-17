import sumPosts from '../sumPosts';
import sumRows from '../sumRows';
import { CorporateTax } from '../constants';

const relevantPostIds = ['income', 'expenses', 'salary'];
export default function calcResult(allPosts) {
  const gross = sumPosts(allPosts, relevantPostIds);
  const rows = [
    {
      title: 'Bruttoresultat',
      units: 1,
      unitPrice: gross,
      hidden: true,
    },
    {
      title: `Bolagsskatt (${(CorporateTax * 100).toFixed(2)}% av vinst)`,
      units: 1,
      unitPrice: Math.round(Math.min(0, -gross) * CorporateTax),
    },
  ];
  return {
    gross,
    rows,
    net: sumRows(rows),
  };
}
