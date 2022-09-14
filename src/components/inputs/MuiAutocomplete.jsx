import React, { useState } from 'react';
import { Stack, Autocomplete, TextField } from '@mui/material';

const skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'C#'];
const MuiAutocomplete = () => {
  const [value, setValue] = useState(null);
  const changeHandler = (event) => {
    setValue(event.target.value);
  };
  console.log(value);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        // value={value}
        onChange={changeHandler}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
