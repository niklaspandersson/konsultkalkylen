import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

const TabPanel = ({ visible, children }) => (
  <Box hidden={!visible} sx={{ p: 1 }}>
    {children}
  </Box>
);

export default function TabControl({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (ev, newValue) => setSelectedTab(newValue);

  return (
    <>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        {tabs.map((tab) => (
          <Tab key={tab.label} label={tab.label} />
        ))}
      </Tabs>
      {tabs.map((tab, i) => (
        <TabPanel key={tab.label} visible={selectedTab === i}>
          {tab.content}
        </TabPanel>
      ))}
    </>
  );
}
