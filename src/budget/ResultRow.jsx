import { TableCell, TableRow } from '@mui/material';

const Result = ({ title, value }) => {
  return (
    <TableRow>
      <TableCell sx={{ fontSize: '1.2em', fontWeight: 'bold' }} colSpan={3}>
        {title}
      </TableCell>
      <TableCell
        sx={{
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          borderTopColor: 'text.primary',
          fontSize: '1.2em',
          fontWeight: 'bold',
        }}
        align="right"
      >
        {value.toLocaleString()}
      </TableCell>
    </TableRow>
  );
};

export default Result;
