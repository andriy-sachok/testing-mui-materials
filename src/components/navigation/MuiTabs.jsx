import React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';
import { Favorite, Home, Share, Save, Send } from '@mui/icons-material';

const MuiTabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            aria-label='Tabs example'
            onChange={handleChange}
            textColor='primary'
            indicatorColor='secondary'
          >
            <Tab
              label='Tab One'
              value='1'
              icon={<Favorite />}
              iconPosition='start'
            />
            <Tab
              label='Tab Two'
              value='2'
              icon={<Share />}
              iconPosition='end'
            />
            <Tab
              label='Tab Three'
              value='3'
              icon={<Home />}
              iconPosition='bottom'
            />
            <Tab
              label='Tab Four'
              value='4'
              icon={<Save />}
              iconPosition='top'
            />
            <Tab
              label='Tab Five (disabled)'
              value='5'
              icon={<Send />}
              disabled
            />
          </TabList>
        </Box>
        <TabPanel value='1'>Panel one</TabPanel>
        <TabPanel value='2'>Panel two</TabPanel>
        <TabPanel value='3'>Panel three</TabPanel>
        <TabPanel value='4'>Panel four</TabPanel>
        <TabPanel value='5'>Panel five</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MuiTabs;
