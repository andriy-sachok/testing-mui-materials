import { Box } from '@mui/material';
import { bgcolor } from '@mui/system';
import React from 'react';

const MuiResponsivness = () => {
  return (
    <Box
      sx={{
        height: '300px',
        width: {
          xs: 100,
          sm: 200,
          md: 300,
          lg: 400,
          xl: 500,
        },
        bgcolor: 'lightgreen',
      }}
    />
  );
};

export default MuiResponsivness;
