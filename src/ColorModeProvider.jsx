import { useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createContext, useEffect, useMemo, useState } from 'react';
import createTheme from './theme';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ColorModeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => setDarkMode(prefersDarkMode), [prefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setDarkMode((prev) => !prev);
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        mode: darkMode ? 'dark' : 'light',
      }),
    [darkMode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
