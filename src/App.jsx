import { Container, CssBaseline, Paper } from '@mui/material';
import TabControl from './TabControl';
import BudgetInc from './budget/inc/Budget';
import BudgetPrivate from './budget/private/Budget';
import useBudgetData from './budget/useBudgetData';
import ColorModeProvider from './ColorModeProvider';

function App() {
  const [state, dispatch] = useBudgetData();

  const tabs = [
    {
      label: 'Enskild firma',
      content: <BudgetPrivate dispatch={dispatch} state={state} />,
    },
    {
      label: 'Enmansaktiebolag',
      content: <BudgetInc dispatch={dispatch} state={state} />,
    },
  ];

  return (
    <ColorModeProvider>
      <CssBaseline enableColorScheme />
      <Container maxWidth="md">
        <Paper>
          <TabControl tabs={tabs} />
        </Paper>
      </Container>
    </ColorModeProvider>
  );
}

export default App;
