import { createTheme as MUIcreateTheme } from '@mui/material';

export default function createTheme({ mode }) {
  return MUIcreateTheme({
    palette: {
      mode,
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: 'none',
          },
        },
      },
    },
  });
}
