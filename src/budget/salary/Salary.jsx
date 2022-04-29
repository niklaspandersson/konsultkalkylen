import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import SalaryParameters from './SalaryParameters';
import Post from "../Post";
import { EmployerFee, PensionTax } from "./data";


export default function Salary({ data, setData }) {
  const rows = [{
    title: 'Lön',
    unitPrice: data.salary,
    units: data.months,
  },
  {
    title: `Arbetsgivaravgift (${Math.round(EmployerFee * 10000) / 100}% av lön)`,
    unitPrice: Math.round(data.salary * EmployerFee),
    units: data.months,
  },
  {
    title: `Avsättning till tjänstepension (per månad)`,
    unitPrice: data.pension,
    units: data.months,
  },
  {
    title: `Löneskatt (${Math.round(PensionTax * 10000) / 100}% av pensionskostnader)`,
    unitPrice: Math.round(data.pension * PensionTax),
    units: data.months,
  },
  ];

  return (
    <Post heading="Uttag" summary={data.summary} rows={rows}>
      <SalaryParameters data={data} setData={setData} />
    </Post>
  );
}
