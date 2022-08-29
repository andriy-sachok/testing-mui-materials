import { Button } from '@mui/material';
import React, { memo } from 'react';

import { MuiSelect } from './components/MuiSelect';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <MuiSelect />
      <Button
        onClick={() => {
          console.log('Button clicked');
        }}
        sx={{ color: `red`, background: `black` }}
      >
        Button
      </Button>
    </div>
  );
};

export default memo(App);
