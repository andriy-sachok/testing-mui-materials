import React, { memo } from 'react';

// import { MuiSelect } from './components/MuiSelect';
// import MuiRadioButton from './components/MuiRadioButton';
// import MuiCheckbox from './components/MuiCheckbox';
// import MuiSwitch from './components/MuiSwitch';
// import MuiRating from './components/MuiRating';
// import MuiAutocomplete from './components/MuiAutocomplete';
import MuiLayout from './components/MuiLayout';

import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckbox /> */}
      {/* <MuiSwitch /> */}
      {/* <MuiRating /> */}
      {/* <MuiAutocomplete /> */}
      <MuiLayout />
    </div>
  );
};

export default memo(App);
