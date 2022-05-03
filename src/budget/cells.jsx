import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const RightAlignedTextField = styled(TextField)({
  "& input": {
    textAlign: "right",
  },
});

export const DetailsHeader = ({ header }) => (
  <TableRow>
    <TableCell colSpan={2}>
      <Typography variant="subtitle2">{header}</Typography>
    </TableCell>
  </TableRow>
);

export const DetailsTitle = ({ title }) => (
  <TableCell>{title}</TableCell>
);

export const DetailsValue = ({ value }) => (
  <TableCell align="right">{value}</TableCell>
);

export const DetailsInput = ({ unit, ...props }) => (
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
);