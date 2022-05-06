import { Edit } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Modal from './Modal';
import sumRows from './sumRows';
const HeaderTableRow = styled(TableRow)(({ theme }) => ({
  '.MuiTableCell-root': {
    paddingTop: '2em',
  },
  '&:first-child': {
    '.MuiTableCell-root': {
      paddingTop: 'inherit',
    },
  },
}));

const PostHeader = ({ heading, onEdit }) => (
  <HeaderTableRow>
    <TableCell scope="row" colSpan={4}>
      <Stack spacing={1} direction="row">
        <Typography variant="h6">{heading}</Typography>
        {onEdit && (
          <IconButton size="small" onClick={onEdit}>
            <Edit fontSize="inherit" />
          </IconButton>
        )}
      </Stack>
    </TableCell>
  </HeaderTableRow>
);

const Row = ({ title, unitPrice, units, sum, className }) => {
  const sumToDisplay = sum ? sum : (unitPrice ?? 0) * (units ?? 0);
  return (
    <TableRow className={className}>
      <TableCell>{title}</TableCell>
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
  const { heading, rows, children } = props;
  const haveEditor = !!children;
  const sum = sumRows(rows);

  const [editorOpen, setEditorOpen] = useState(false);
  const openEditor = () => setEditorOpen(true);
  const closeEditor = () => setEditorOpen(false);

  return (
    <>
      {haveEditor && (
        <Modal title={heading} open={editorOpen} handleClose={closeEditor}>
          {children}
        </Modal>
      )}
      <PostHeader
        heading={heading}
        onEdit={haveEditor ? openEditor : undefined}
      />
      {rows?.map((row) => (
        <Row key={`${heading}-${row.title}`} {...row} />
      ))}
      {<Summary sum={sum} title={'Summa'} />}
    </>
  );
}
