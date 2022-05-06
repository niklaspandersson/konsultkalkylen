export default function sumRows(rows) {
  return rows?.reduce((sum, row) => sum + row.units * row.unitPrice, 0) ?? 0;
}
