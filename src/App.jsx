import React, { memo } from 'react';

// import { MuiSelect } from './components/MuiSelect';
// import MuiRadioButton from './components/MuiRadioButton';
import MuiCheckbox from './components/MuiCheckbox';

import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      <MuiCheckbox />
    </div>
  );
};

export default memo(App);
