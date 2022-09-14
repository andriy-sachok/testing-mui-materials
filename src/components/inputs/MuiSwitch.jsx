import { useState } from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);

  const changeHandler = (event) => {
    setChecked(event.target.checked);
  };

  console.log(checked);
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch checked={checked} onChange={changeHandler} />}
      ></FormControlLabel>
    </Box>
  );
};

export default MuiSwitch;
