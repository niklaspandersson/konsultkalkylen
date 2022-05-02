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
    <TableCell colSpan={2} sx={{ pt: 3 }}>
      <Typography variant="subtitle2">{header}</Typography>
    </TableCell>
  </TableRow>
);

export const DetailsTitle = ({ title }) => (
  <TableCell scope="row">{title}</TableCell>
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

const PostHeader = ({ heading }) => (
  <TableRow>
    <TableCell component="th" scope="row" colSpan={4}>
      <Typography variant="subtitle1">{heading}</Typography>
    </TableCell>
  </TableRow>
);

const Row = ({ title, unitPrice, units, sum, ...rowProps }) => {
  const sumToDisplay = sum ? sum : (unitPrice ?? 0) * (units ?? 0);
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Typography variant="subtitle2">{title}</Typography>
      </TableCell>
      <TableCell align="right">{unitPrice?.toLocaleString()}</TableCell>
      <TableCell align="right">{units?.toLocaleString()}</TableCell>
      <TableCell align="right">{sumToDisplay?.toLocaleString()}</TableCell>
    </TableRow>
  );
};

const Summary = (props) => <Row {...props} sx={{ fontSize: "1.3em" }} />;

const PostHeader = ({ heading }) => (
  <TableRow>
    <TableCell component="th" scope="row" colSpan={4}>
      <Typography variant="subtitle1">{heading}</Typography>
    </TableCell>
  </TableRow>
);

const Row = ({ title, unitPrice, units, sum }) => {
  const sumToDisplay = sum ? sum : (unitPrice ?? 0) * (units ?? 0);
  return (
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      <TableCell component="th" scope="row">
        <Typography variant="subtitle2">{title}</Typography>
      </TableCell>
      <TableCell align="right">{unitPrice?.toLocaleString()}</TableCell>
      <TableCell align="right">{units?.toLocaleString()}</TableCell>
      <TableCell align="right">{sumToDisplay?.toLocaleString()}</TableCell>
    </TableRow>
  );
};
export default function Post(props) {
  const { heading, rows, summary, children } = props;

  return (
    <>
      <PostHeader heading={heading} />
      {rows?.map((row) => (
        <Row {...row} />
      ))}
      {rows?.length !== 1 && summary && <Summary {...summary} />}
    </>
  );
}
