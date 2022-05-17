import sum from '../sumRows';
import { CorporateTax } from '../constants';

export default function calcResult(posts) {
  const allPosts = Object.values(posts).flatMap((post) => post.rows);
  const gross = sum(allPosts);
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
    net: sum(rows),
  };
}
