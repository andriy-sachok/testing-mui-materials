import React, { memo } from 'react';

// import { MuiSelect } from './components/MuiSelect';
import MuiRadioButton from './components/MuiRadioButton';

import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <MuiSelect /> */}
      <MuiRadioButton />
    </div>
  );
};

export default memo(App);
