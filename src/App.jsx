import { Box, Container, Paper, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Budget, BudgetInc } from './budget';
import ColorModeProvider from './ColorModeProvider';

const TabPanel = ({ visible, children }) => (
  <Box hidden={!visible} sx={{ p: 1 }}>
    {children}
  </Box>
);

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (ev, newValue) => setSelectedTab(newValue);

  return (
    <ColorModeProvider>
      <Container maxWidth="md">
        <Paper>
          <Tabs value={selectedTab} onChange={handleTabChange}>
            <Tab label="Enskild firma" />
            <Tab label="Enmansaktiebolag" />
          </Tabs>
          <TabPanel visible={selectedTab === 0}>
            <Budget />
          </TabPanel>
          <TabPanel visible={selectedTab === 1}>
            <BudgetInc />
          </TabPanel>
        </Paper>
      </Container>
    </ColorModeProvider>
  );
}

export default App;
