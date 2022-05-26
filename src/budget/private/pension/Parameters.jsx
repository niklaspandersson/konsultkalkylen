import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import {
  DetailsHeader,
  DetailsInput,
  DetailsTitle,
  DetailsValue,
} from '../../cells';
import { PensionTax } from '../../constants';

const Parameters = ({ data, setData }) => (
  <TableContainer>
    <Table size="small">
      <TableBody>
        <DetailsHeader header="Privat pension" />
        <TableRow>
          <DetailsTitle title="Pensionssparande (per månad)" />
          <DetailsInput
            unit="kr"
            value={data.pension}
            onChange={(ev) => setData({ pension: Number(ev.target.value) })}
          />
        </TableRow>
        <TableRow sx={{ fontStyle: 'italic' }}>
          <DetailsTitle
            title={`Löneskatt (${
              Math.round(PensionTax * 10000) / 100
            }% av pensionskostnader)`}
          />
          <DetailsValue
            value={`${Math.round(
              data.pension * PensionTax,
            ).toLocaleString()} kr`}
          />
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
export default Parameters;
