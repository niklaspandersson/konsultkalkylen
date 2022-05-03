import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";


const HeaderTableRow = styled(TableRow)(({ theme }) => ({
  '.MuiTableCell-root': {
    paddingTop: '2em',
  },
  '&:first-child': {
    '.MuiTableCell-root': {
      paddingTop: 'inherit',
    }
  }
}));

const PostHeader = ({ heading }) => (
  <HeaderTableRow>
    <TableCell scope="row" colSpan={4}>
      <Typography variant="h6">{heading}</Typography>
    </TableCell>
  </HeaderTableRow>
);

const Row = ({ title, unitPrice, units, sum, className }) => {
  const sumToDisplay = sum ? sum : (unitPrice ?? 0) * (units ?? 0);
  return (
    <TableRow className={className}>
      <TableCell>
        {title}
      </TableCell>
      <TableCell align="right">{unitPrice?.toLocaleString()}</TableCell>
      <TableCell align="right">{units?.toLocaleString()}</TableCell>
      <TableCell align="right">{sumToDisplay?.toLocaleString()}</TableCell>
    </TableRow>
  );
};

const Summary = styled(Row)(({ theme }) => ({
  '& .MuiTableCell-root': {
    fontWeight: 'bold',
  },
}));

export default function Post(props) {
  const { heading, rows, summary, children } = props;

  return (
    <>
      <PostHeader heading={heading} />
      {rows?.map((row) => (
        <Row key={row.id} {...row} />
      ))}
      {<Summary {...summary} title={'Summa'} />}
    </>
  );
}
