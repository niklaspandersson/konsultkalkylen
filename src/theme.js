import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "none",
        },
      },
    },
  },
});

export default theme;
