import React, { memo } from 'react';

// import { MuiSelect } from './components/MuiSelect';
// import MuiRadioButton from './components/MuiRadioButton';
// import MuiCheckbox from './components/MuiCheckbox';
// import MuiSwitch from './components/MuiSwitch';
import MuiRating from './components/MuiRating';

import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckbox /> */}
      {/* <MuiSwitch /> */}
      <MuiRating />
    </div>
  );
};

export default memo(App);
