import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import { DetailsInput, DetailsTitle } from '../cells';

const Parameters = ({ data, setData }) => (
  <TableContainer>
    <Table size="small">
      <TableBody>
        <TableRow>
          <DetailsTitle title="Månatliga utgifter" />
          <DetailsInput
            unit="kr"
            value={data.monthly}
            onChange={(ev) => setData({ monthly: Number(ev.target.value) })}
          />
        </TableRow>
        <TableRow>
          <DetailsTitle title="Årliga utgifter" />
          <DetailsInput
            unit="kr"
            value={data.yearly}
            onChange={(ev) => setData({ yearly: Number(ev.target.value) })}
          />
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
export default Parameters;
