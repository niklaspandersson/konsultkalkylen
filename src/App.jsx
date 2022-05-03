import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Budget from './budget';
import theme from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Budget />
      </Container>
    </ThemeProvider>
  );
}

export default App;
