import React, { useState, useCallback } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

export const MuiSelect = () => {
  const [country, setCountry] = useState('');

  console.log('country', country);

  const changeHandler = useCallback((event) => {
    setCountry(event.target.value);
  }, []);

  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={country}
        onChange={changeHandler}
        fullWidth
      >
        <MenuItem value="UA">Ukraine</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="UK">England</MenuItem>
      </TextField>
    </Box>
  );
};
