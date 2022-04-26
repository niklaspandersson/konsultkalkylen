import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

import Post, { DetailsHeader, DetailsInput, DetailsTitle } from "./Post";

// Constants
const WeeksPerMonth = 4.25;

// labour time
const DefaultHoursPerWeek = 35;
const DefaultVacation = 6;
const DefaultSickLeavePercent = 5;
// assignments
const DefaultPrice = 830;
const DefaultOccupancy = 9;

export function useIncomeData() {
  const [data, setData] = useState({
    hoursPerWeek: DefaultHoursPerWeek,
    vacation: DefaultVacation,
    sickLeavePercent: DefaultSickLeavePercent,
    price: DefaultPrice,
    occupancy: DefaultOccupancy,
  });
  const workingWeeks = WeeksPerMonth * data.occupancy - data.vacation;
  const workingHours = workingWeeks * data.hoursPerWeek;
  const payedHours = Math.floor(workingHours * (1 - data.sickLeavePercent / 100));
  const summary = {
    unitPrice: data.price,
    count: payedHours,
    sum: data.price * payedHours,
  };
  return [summary, data, data => setData(prev => ({ ...prev, ...data }))];
}

export default function Income({ summary, data, setData }) {
  return (
    <Post heading="Arvoden" {...summary}>
      <TableContainer>
        <Table size="small">
          <TableBody>
            <DetailsHeader header="Uppdrag" />
            <TableRow>
              <DetailsTitle title="Timarvode (exkl. moms)" />
              <DetailsInput unit="kr" value={data.price} onChange={ev => setData({ price: Number(ev.target.value) })} />
            </TableRow>
            <TableRow>
              <DetailsTitle title="Debiterbara månader" />
              <DetailsInput value={data.occupancy} onChange={ev => setData({ occupancy: Number(ev.target.value) })} />
            </TableRow>

            <DetailsHeader header="Arbetstid" />
            <TableRow>
              <DetailsTitle title="Arbetstimmar per vecka" />
              <DetailsInput value={data.hoursPerWeek} onChange={ev => setData({ hoursPerWeek: Number(ev.target.value) })} />
            </TableRow>
            <TableRow>
              <DetailsTitle title="Lediga veckor under uppdrag" />
              <DetailsInput value={data.vacation} onChange={ev => setData({ vacation: Number(ev.target.value) })} />
            </TableRow>
            <TableRow>
              <DetailsTitle title="Uppskattad andel sjukdagar/vab" />
              <DetailsInput unit="%" value={data.sickLeavePercent} onChange={ev => setData({ sickLeavePercent: Number(ev.target.value) })} />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Post>
  );
}
