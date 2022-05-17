import { Box, Container, Paper, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Budget, BudgetInc } from './budget';
import useBudgetData from './budget/useBudgetData';
import ColorModeProvider from './ColorModeProvider';

const TabPanel = ({ visible, children }) => (
  <Box hidden={!visible} sx={{ p: 1 }}>
    {children}
  </Box>
);

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (ev, newValue) => setSelectedTab(newValue);

  const [state, dispatch] = useBudgetData();

  const tabs = [{ label: 'Enskild firma' }];

  return (
    <ColorModeProvider>
      <Container maxWidth="md">
        <Paper>
          <Tabs value={selectedTab} onChange={handleTabChange}>
            <Tab label="Enskild firma" />
            <Tab label="Enmansaktiebolag" />
          </Tabs>
          <TabPanel visible={selectedTab === 0}>
            <Budget dispatch={dispatch} state={state} />
          </TabPanel>
          <TabPanel visible={selectedTab === 1}>
            <BudgetInc dispatch={dispatch} state={state} />
          </TabPanel>
        </Paper>
      </Container>
    </ColorModeProvider>
  );
}

export default App;
