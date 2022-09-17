import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Fragment } from 'react';

function MuiDateRangePicker() {
  const [value, setValue] = useState(null);

  console.log('value: ', value);

  return (
    <Box width='500px'>
      <DateRangePicker
        startText='Check-in'
        endText='Check-out'
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => {
          <Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: '2' }}> to </Box>
            <TextField {...endProps} />
          </Fragment>;
        }}
      />
    </Box>
  );
}

export default MuiDateRangePicker;
