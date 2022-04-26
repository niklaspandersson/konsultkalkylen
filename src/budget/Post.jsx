import { useState } from "react";
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FormControl from "@mui/material/FormControl"
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography";


const RightAlignedTextField = styled(TextField)({
  "& input": {
    textAlign: "right",
  },
});

export const DetailsHeader = ({ header }) =>
  <TableRow>
    <TableCell colSpan={2} sx={{ pt: 3 }}>
      <Typography variant="subtitle2">{header}</Typography>
    </TableCell>
  </TableRow>

export const DetailsTitle = ({ title }) =>
  <TableCell scope="row">
    {title}
  </TableCell>

export const DetailsValue = ({ value }) =>
  <TableCell align="right">
    {value}
  </TableCell>

export const DetailsInput = ({ unit, ...props }) =>
  <TableCell align="right">
    <FormControl fullWidth>
      <RightAlignedTextField
        variant="standard"
        InputProps={{
          endAdornment: !unit ? undefined : (
            <InputAdornment position="end">{unit}</InputAdornment>
          ),
        }}
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9]+.?[0-9]*",
        }}
        {...props}
      />
    </FormControl>
  </TableCell>

export default function Post(props) {
  const { heading, unitPrice, count, sum, children } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>{children}</Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Typography variant="subtitle1">{heading}</Typography>
        </TableCell>
        <TableCell align="right">{unitPrice.toLocaleString()}</TableCell>
        <TableCell align="right">{count.toLocaleString()}</TableCell>
        <TableCell align="right">{sum.toLocaleString()}</TableCell>
      </TableRow>

    </>
  );
}
