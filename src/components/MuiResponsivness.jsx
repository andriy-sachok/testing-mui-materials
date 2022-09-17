import React from 'react';
import { Box } from '@mui/material';

import { styled } from '@mui/material';
import { Fragment } from 'react';

const StyledBox = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '250px',
  backgroundColor: theme.palette.dark.main,
}));

const MuiResponsivness = () => {
  return (
    <Fragment>
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
          bgcolor: 'secondary.light',
        }}
      />
      <StyledBox />
    </Fragment>
  );
};

export default MuiResponsivness;
