import { Paper, Typography } from '@mui/material';
import { Row, Summary } from '../Post';
import Tabular from '../Tabular';

export default function PrivateEarnings({ rows, net, heading }) {
  return (
    <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6">{heading}</Typography>
      <Tabular>
        {rows?.map(
          (row) =>
            !row.hidden && <Row key={`${heading}-${row.title}`} {...row} />,
        )}
        <Summary sum={net} title={'Summa efter skatt'} />
      </Tabular>
    </Paper>
  );
}
