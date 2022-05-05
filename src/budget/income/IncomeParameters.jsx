import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

import { DetailsHeader, DetailsInput, DetailsTitle } from "../cells";

const IncomeParameters = ({ data, setData }) => (
  <TableContainer>
    <Table size="small">
      <TableBody>
        <DetailsHeader header="Uppdrag" />
        <TableRow>
          <DetailsTitle title="Timarvode (exkl. moms)" />
          <DetailsInput
            unit="kr"
            value={data.rate}
            onChange={(ev) => setData({ rate: Number(ev.target.value) })}
          />
        </TableRow>
        <TableRow>
          <DetailsTitle title="Debiterbara månader" />
          <DetailsInput
            value={data.occupancy}
            onChange={(ev) => setData({ occupancy: Number(ev.target.value) })}
          />
        </TableRow>

        <DetailsHeader header="Arbetstid" />
        <TableRow>
          <DetailsTitle title="Arbetstimmar per vecka" />
          <DetailsInput
            value={data.hoursPerWeek}
            onChange={(ev) =>
              setData({ hoursPerWeek: Number(ev.target.value) })
            }
          />
        </TableRow>
        <TableRow>
          <DetailsTitle title="Lediga veckor under uppdrag" />
          <DetailsInput
            value={data.vacation}
            onChange={(ev) => setData({ vacation: Number(ev.target.value) })}
          />
        </TableRow>
        <TableRow>
          <DetailsTitle title="Uppskattad andel sjukdagar/vab" />
          <DetailsInput
            unit="%"
            value={data.sickLeavePercent}
            onChange={(ev) =>
              setData({ sickLeavePercent: Number(ev.target.value) })
            }
          />
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

export default IncomeParameters;
