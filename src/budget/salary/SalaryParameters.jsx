import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

import { DetailsHeader, DetailsInput, DetailsTitle, DetailsValue } from "../Post";
import { EmployerFee, PensionTax } from './data';

const SalaryParameters = ({ data, setData }) => (
  <TableContainer>
    <Table size="small">
      <TableBody>
        <DetailsHeader header="Lön och pension" />
        <TableRow>
          <DetailsTitle title="Antal månader att betala ut lön" />
          <DetailsInput value={data.months} onChange={ev => setData({ months: Number(ev.target.value) })} />
        </TableRow>
        <TableRow>
          <DetailsTitle title="Månadslön" />
          <DetailsInput unit="kr" value={data.salary} onChange={ev => setData({ salary: Number(ev.target.value) })} />
        </TableRow>
        <TableRow sx={{ fontStyle: 'italic' }}>
          <DetailsTitle title={`Arbetsgivaravgift (${Math.round(EmployerFee * 10000) / 100}% av lön)`} />
          <DetailsValue value={`${Math.round(data.salary * EmployerFee).toLocaleString()} kr`} />
        </TableRow>
        <TableRow>
          <DetailsTitle title="Avsättning till tjänstepension (per månad)" />
          <DetailsInput unit="kr" value={data.pension} onChange={ev => setData({ pension: Number(ev.target.value) })} />
        </TableRow>
        <TableRow sx={{ fontStyle: 'italic' }}>
          <DetailsTitle title={`Löneskatt (${Math.round(PensionTax * 10000) / 100}% av pensionskostnader)`} />
          <DetailsValue value={`${Math.round(data.pension * PensionTax).toLocaleString()} kr`} />
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
export default SalaryParameters;